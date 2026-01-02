import { memo } from 'react';
import { SearchSvgIcon } from '../ui/icons';

/**
 * SearchInput Component
 * @param {Object} props - Component props
 * @param {Function} props.setSearchTerm - Function to update search term state
 * @param {string} props.searchTerm - Current search term value
 */
const SearchInput = memo(({ setSearchTerm, searchTerm }) => {

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div
            className="flex items-center border border-borderColor rounded-lg w-fit overflow-hidden"
            role="search"
            aria-label="Search input"
        >
            <span
                className="size-4 my-1 mx-2 cursor-pointer flex-shrink-0"
                aria-hidden="true"
            >
                <SearchSvgIcon />
            </span>

            <div className="transition-all duration-300 ease-in-out overflow-hidden">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search"
                    className="bg-transparent pr-2 py-1.5 text-sm text-default focus:outline-none w-40"
                    aria-label="Search input field"
                    autoComplete="off"
                />
            </div>
        </div>
    );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
