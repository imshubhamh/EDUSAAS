import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import DocsSidebar from "../components/docs/DocsSidebar";
import docsConfig from "../data/docsConfig";
import { dummyDocs } from "../data/dummyDocs";
//import { useGetDocumentationQuery } from "../redux/apiSlices/documentationApi";
import { Search, ChevronLeft, ChevronRight as ChevronRightIcon, X, BookOpen } from "lucide-react";
import DocsSkeleton from "../components/docs/DocsSkeleton";
// ===== SLUG HELPER =====
const slugify = (text) =>
    (text || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

// Search helper functions
const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
};

const highlightText = (text, searchTerm) => {
    if (!searchTerm || !text) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-0.5 rounded">$1</mark>');
};

const Documentation = () => {
    let { tab, pageSlug } = useParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showSearchResults, setShowSearchResults] = useState(false);

    // Disambiguation
    if (tab && !docsConfig[tab]) {
        pageSlug = tab;
        tab = "docs";
    }
    tab = tab || "docs";

    const activeConfig = docsConfig[tab];
    const docs = dummyDocs;
    const isLoading = false;
    const error = false;


    // Normalize strings for resilient matching
    const normalize = (str) => (str || "").toLowerCase().replace(/\s+/g, "").trim();
    const targetCategory = (activeConfig?.category || "Sapher Chain");
    const normTarget = normalize(targetCategory);

    const filteredDocs = docs.filter(doc => {
        const docCat = (doc.category || "");
        const normCat = normalize(docCat);

        return normCat === normTarget ||
            (normCat === "documentation" && normTarget === "sapherchain") ||
            docCat.toLowerCase().includes(targetCategory.toLowerCase());
    });

    // Memoize searchable documents
    const searchableDocs = useMemo(() => {
        return filteredDocs.map(doc => ({
            ...doc,
            plainContent: stripHtml(doc.content).toLowerCase(),
            plainSubject: (doc.subject || "").toLowerCase(),
            plainMetaTitle: (doc.metaTitle || "").toLowerCase(),
            plainTitle: (doc.title || "").toLowerCase(),
        }));
    }, [filteredDocs]);

    // Search function
    const performSearch = useCallback(
        (query) => {
            if (!query.trim()) {
                setSearchResults([]);
                setShowSearchResults(false);
                return;
            }

            setIsSearching(true);
            const searchTerm = query.toLowerCase().trim();
            const searchWords = searchTerm.split(/\s+/).filter((w) => w.length > 2);

            const results = searchableDocs
                .map((doc) => {
                    const matches = {
                        inSubject: false,
                        inMetaTitle: false,
                        inTitle: false,
                        inContent: false,
                        contentMatches: [],
                    };

                    if (
                        doc.plainSubject.includes(searchTerm) ||
                        searchWords.some((w) => doc.plainSubject.includes(w))
                    ) {
                        matches.inSubject = true;
                    }

                    if (
                        doc.plainMetaTitle.includes(searchTerm) ||
                        searchWords.some((w) => doc.plainMetaTitle.includes(w))
                    ) {
                        matches.inMetaTitle = true;
                    }

                    if (
                        doc.plainTitle.includes(searchTerm) ||
                        searchWords.some((w) => doc.plainTitle.includes(w))
                    ) {
                        matches.inTitle = true;
                    }

                    const contentIndex = doc.plainContent.indexOf(searchTerm);
                    if (contentIndex > -1) {
                        matches.inContent = true;
                        matches.contentMatches.push({
                            index: contentIndex,
                            length: searchTerm.length,
                        });
                    }

                    const hasMatch =
                        matches.inSubject ||
                        matches.inMetaTitle ||
                        matches.inTitle ||
                        matches.inContent;

                    if (!hasMatch) return null;

                    return {
                        ...doc,
                        matches,
                        excerpt: matches.inContent
                            ? doc.plainContent.substring(
                                Math.max(0, contentIndex - 50),
                                Math.min(doc.plainContent.length, contentIndex + 150)
                            )
                            : null,
                    };
                })
                .filter(Boolean)
                .slice(0, 10);

            setSearchResults(results);
            setIsSearching(false);
            setShowSearchResults(true);
        },
        [searchableDocs]
    );

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        performSearch(query);
    };

    // Clear search
    // const clearSearch = () => {
    //   setSearchQuery("");
    //   setSearchResults([]);
    //   setShowSearchResults(false);
    // };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showSearchResults && !e.target.closest('.search-container')) {
                setShowSearchResults(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showSearchResults]);

    const findDocInList = (list, slug, mode = "all") => {
        if (!slug) return null;
        const target = slugify(slug);

        // 1. Direct match with ID or exact slug (Checked in both modes)
        let found = list.find(doc => doc._id === slug || slugify(doc.slug) === target);
        if (found) return found;

        // 2. Exact Metadata Match (Checked in both modes)
        found = list.find(doc => {
            const meta = slugify(doc.metaTitle);
            const title = slugify(doc.title);
            const subject = slugify(doc.subject);
            return meta === target || title === target || subject === target;
        });
        if (found) return found;

        if (mode === "exact") return null;

        // 3. Partial Metadata Match (Prefix/Inclusion)
        found = list.find(doc => {
            const meta = slugify(doc.metaTitle);
            const title = slugify(doc.title);
            const subject = slugify(doc.subject);

            return (meta && meta.includes(target)) ||
                (title && title.includes(target)) ||
                (target.length > 5 && subject.includes(target));
        });
        if (found) return found;

        // 4. Heading Match (Prioritize documents where the target is a section heading)
        found = list.find(doc => {
            const content = (doc.content || "").toLowerCase();
            const headingMatches = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi);
            if (!headingMatches) return false;
            return headingMatches.some(h => slugify(h.replace(/<[^>]*>/g, "")) === target);
        });
        if (found) return found;

        // 5. Content Scanning fallback (Text-only, resilient to punctuation/entities)
        found = list.find(doc => {
            const content = (doc.content || "").toLowerCase();
            // Remove tags, strip HTML entities, and normalize all whitespace/punctuation
            const plainText = content
                .replace(/<[^>]*>/g, " ")
                .replace(/&[a-z0-9#]+;/gi, "") // Strip HTML entities
                .replace(/[^a-z0-9]+/g, "");
            const targetText = slug.replace(/[^a-z0-9]+/g, "");
            return plainText.includes(targetText);
        });

        return found;
    };

    let activeDoc = null;
    const searchSlug = pageSlug ? slugify(pageSlug) : null;

    if (searchSlug) {
        // 1. First Pass: Search for EXACT match in filtered then all docs
        activeDoc = findDocInList(filteredDocs, searchSlug, "exact");
        if (!activeDoc) activeDoc = findDocInList(docs, searchSlug, "exact");

        // 2. Second Pass: Fallback to PARTIAL match if no exact match found
        if (!activeDoc) {
            activeDoc = findDocInList(filteredDocs, searchSlug, "all");
            if (!activeDoc) activeDoc = findDocInList(docs, searchSlug, "all");
        }
    }

    // Fallback if no pageSlug is provided OR if no match was found for pageSlug
    if (!activeDoc) {
        // 1. Try to find "Introduction" specifically as default
        activeDoc = filteredDocs.find(doc => {
            const normTitle = (doc.metaTitle || doc.subject || doc.title || "").toLowerCase();
            return normTitle.includes("introduction") || normTitle.includes("getting started");
        });

        // 2. If no introduction, try matching the first sidebar item
        if (!activeDoc && !pageSlug) {
            const firstSection = activeConfig?.sidebar?.[0];
            const firstItem = firstSection?.children?.[0] || firstSection;

            if (firstItem) {
                const label = typeof firstItem === 'string' ? firstItem : (firstItem.title || firstItem.label);
                const itemSlug = slugify(label);
                activeDoc = findDocInList(filteredDocs, itemSlug);
            }
        }

        // 3. Final fallback: just the first doc
        if (!activeDoc) activeDoc = filteredDocs[0];
    }

    // Scroll logic: localized to container, triggered by pageSlug/activeDoc
    useEffect(() => {
        const container = document.getElementById("docs-content-area");
        if (!container) return;

        if (!pageSlug || !activeDoc) {
            container.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const timer = setTimeout(() => {
            const searchTarget = slugify(pageSlug);
            const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
            let foundElement = null;

            // Try exact match first
            for (const h of headings) {
                if (slugify(h.textContent) === searchTarget) {
                    foundElement = h;
                    break;
                }
            }

            // Fallback to fuzzy match (contains)
            if (!foundElement) {
                for (const h of headings) {
                    const normH = slugify(h.textContent).replace(/-/g, "");
                    const normT = searchTarget.replace(/-/g, "");
                    if (normH.includes(normT) || normT.includes(normH)) {
                        foundElement = h;
                        break;
                    }
                }
            }

            if (foundElement) {
                const containerRect = container.getBoundingClientRect();
                const elementRect = foundElement.getBoundingClientRect();
                const scrollTarget = elementRect.top - containerRect.top + container.scrollTop - 24;
                container.scrollTo({ top: scrollTarget, behavior: "smooth" });
            } else {
                container.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 150);

        return () => clearTimeout(timer);
    }, [pageSlug, tab, activeDoc]);

    const currentIndex = filteredDocs.findIndex(doc => doc._id === activeDoc?._id);
    const prevDoc = currentIndex > 0 ? filteredDocs[currentIndex - 1] : null;
    const nextDoc = currentIndex < filteredDocs.length - 1 ? filteredDocs[currentIndex + 1] : null;

    return (
        <div className="h-screen w-full pt-[10vh] bg-white text-black flex overflow-hidden font-sans">
            <DocsSidebar
                sidebarData={activeConfig.sidebar}
                tab={tab}
                docs={filteredDocs}
                activeDoc={activeDoc}
                pageSlug={pageSlug}
            />

            <div className="flex-1 h-full flex flex-col overflow-hidden bg-white">

                <div className="h-14 flex items-center justify-between px-8 border-b border-slate-100 bg-white shrink-0 z-10">
                    <div className="flex items-center gap-6 search-container">
                        <div className="relative w-[340px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search documentation..."
                                className="w-full pl-10 pr-10 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all placeholder:text-slate-400"

                            />


                            {showSearchResults && searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto">
                                    <div className="p-2 border-b border-slate-100">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-slate-600">
                                                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                                            </span>
                                            {isSearching && (
                                                <div className="animate-spin rounded-full h-3 w-3 border-2 border-indigo-600 border-t-transparent"></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        {searchResults.map((result, index) => (
                                            <Link
                                                key={result._id}
                                                to={`/docs/${tab === "docs" ? "" : tab + "/"}${result.slug}/`}
                                                className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-md transition-colors group"
                                                onClick={() => setShowSearchResults(false)}
                                            >
                                                <div className="flex-shrink-0 mt-1">
                                                    <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs text-slate-500">
                                                            {result.matches.inSubject && 'Title • '}
                                                            {result.matches.inContent && 'Content'}
                                                        </span>
                                                    </div>
                                                    <h4
                                                        className="text-sm font-semibold text-slate-900 mb-1 truncate"
                                                        dangerouslySetInnerHTML={{
                                                            __html: highlightText(result.metaTitle || result.subject, searchQuery)
                                                        }}
                                                    />
                                                    {result.excerpt && (
                                                        <p
                                                            className="text-xs text-slate-600 line-clamp-2"
                                                            dangerouslySetInnerHTML={{
                                                                __html: highlightText(result.excerpt, searchQuery)
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* No Results Message */}
                            {showSearchResults && searchQuery && searchResults.length === 0 && !isSearching && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-50 p-4">
                                    <div className="text-center text-slate-500">
                                        <p className="text-sm font-medium mb-1">No results found</p>
                                        <p className="text-xs">Try different keywords or check spelling</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Section:</span>
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold uppercase tracking-wider rounded-md border border-indigo-100">
                            {tab}
                        </span>
                    </div>
                </div>

                <main id="docs-content-area" className="flex-1 overflow-y-auto scroll-smooth bg-white">
                    {/* Main content wrapper - Fluid, Tight Left Gutter */}
                    <div className="w-full max-w-6xl px-8 py-10">
                        {/* {isLoading && (
              <div className="flex items-center justify-start py-10">
                <div className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-600 border-t-transparent"></div>
                  Loading...
                </div>
              </div>
            )} */}


                        {isLoading && (
                            <DocsSkeleton />
                        )}


                        {error && (
                            <div className="max-w-2xl p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-xs">
                                Error loading documentation components.
                            </div>
                        )}

                        {activeDoc ? (
                            <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                                {/* Impactful Header */}
                                <header className="mb-10 pb-8 border-b border-slate-50">
                                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                                        {activeDoc.metaTitle || activeDoc.title || activeDoc.subject}
                                    </h1>
                                    <p className="text-base text-slate-500 max-w-2xl font-medium">
                                        Detailed technical overview and implementation guides for {activeDoc.subject || tab}.
                                    </p>
                                </header>
                                <article
                                    className="docs-content"
                                    dangerouslySetInnerHTML={{ __html: activeDoc.content }}
                                />

                                <footer className="mt-16 pt-10 border-t border-slate-100 max-w-4xl flex items-center justify-between">
                                    {prevDoc ? (
                                        <Link
                                            to={`/docs/${tab === "docs" ? "" : tab + "/"}${prevDoc.slug}/`}
                                            className="group flex flex-col items-start gap-1 max-w-[45%]"
                                        >
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 flex items-center gap-1 transition-colors">
                                                <ChevronLeft className="w-3 h-3" /> Previous
                                            </span>
                                            <span className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate w-full">
                                                {prevDoc.metaTitle || prevDoc.subject}
                                            </span>
                                        </Link>
                                    ) : <div />}

                                    {nextDoc && (
                                        <Link
                                            to={`/docs/${tab === "docs" ? "" : tab + "/"}${nextDoc.slug}/`}
                                            className="group flex flex-col items-end gap-1 text-right max-w-[45%]"
                                        >
                                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 flex items-center justify-end gap-1 transition-colors">
                                                Next <ChevronRightIcon className="w-3 h-3" />
                                            </span>
                                            <span className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate w-full">
                                                {nextDoc.metaTitle || nextDoc.subject}
                                            </span>
                                        </Link>
                                    )}
                                </footer>
                            </div>
                        ) : filteredDocs.length > 0 ? (
                            <div className="animate-in fade-in duration-500">
                                <header className="mb-14">
                                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                                        Explore {tab} Documentation
                                    </h1>
                                    <p className="text-lg text-slate-500 max-w-2xl font-medium">
                                        Technical specifications, implementation guides, and tutorials for {tab}.
                                    </p>
                                </header>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredDocs.map((doc) => (
                                        <Link
                                            key={doc._id}
                                            to={`/docs/${tab === "docs" ? "" : tab + "/"}${doc.slug}/`}
                                            className="
                        relative group p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-300
                        hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1
                      "
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors tracking-tight">
                                                {doc.metaTitle || doc.subject}
                                            </h3>
                                            <p className="text-slate-500 leading-relaxed text-sm line-clamp-3">
                                                {doc.title || "Read full documentation for this module."}
                                            </p>
                                            <div className="mt-6 flex items-center gap-2 text-indigo-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                                Read more <ChevronRightIcon className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="py-20 text-center text-slate-400 font-medium">
                                {/* No documentation found in this section. */}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Documentation;

