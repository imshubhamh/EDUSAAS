import {
  sidebarData,
  apiSidebarData,
  sdkSidebarData,
  cookbookSidebarData,
  contractsSidebarData,
  sdkDownloadSidebarData,
  supportSidebarData,
  websocketSidebarData,
  testnetSidebarData
} from "../data/docs";
export const tocItems = [
  {
    id: "getting-started",
    label: "Getting Started",
    children: [
      { id: "deploy-first-app", label: "Deploy Your First Solana Application" },
    ],
  },
  { id: "try-solana", label: "Try Solana: Play 2048" },
  {
    id: "start-learning",
    label: "Start Learning",
    children: [
      {
        id: "client-dev",
        label: "Client Side Development",
        children: [
          { id: "official-sdks", label: "Official SDKs" },
          { id: "community-sdks", label: "Community SDKs" },
        ],
      },
    ],
  },
  { id: "running-validator", label: "Running a validator" },
  { id: "getting-support", label: "Getting Support" },
];
const getPagesFromSidebar = (data, pages = []) => {
  data.forEach((item) => {
    if (item.title) {
      pages.push({
        id: item.title.toLowerCase().replace(/\s+/g, "-"),
        title: item.title,
      });
      item.children?.forEach((child) => {
        if (typeof child === "object" && child.title) {
          pages.push({
            id: child.title.toLowerCase().replace(/\s+/g, "-"),
            title: child.title,
          });
        }
      });
    }
  });
  return pages;
};
const docsConfig = {
  docs: {
    sidebar: sidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(sidebarData),
    title: "Solana Documentation",
    subtitle: "Sapher Documentation",
    contentType: "docs",
    category: "Sapher Chain",
  },
  api: {
    sidebar: apiSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(apiSidebarData),
    title: "API Reference",
    subtitle: "Sapher API",
    contentType: "api",
    category: "api",
  },
  sdk: {
    sidebar: sdkSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(sdkSidebarData),
    title: "SDKs",
    subtitle: "Sapher SDKs",
    contentType: "sdk",
  },
  cookbook: {
    sidebar: cookbookSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(cookbookSidebarData),
    title: "Cookbook",
    subtitle: "Sapher Cookbook",
    contentType: "cookbook",
  },
  contracts: {
    sidebar: contractsSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(contractsSidebarData),
    title: "Contracts",
    subtitle: "Sapher Contracts",
    contentType: "contracts",
  },
  testnet: {
    sidebar: testnetSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(testnetSidebarData),
    title: "Testnet",
    subtitle: "Sapher Testnet",
    contentType: "testnet",
  },
  websocket: {
    sidebar: websocketSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(websocketSidebarData),
    title: "Websocket",
    subtitle: "Sapher Websocket",
    contentType: "websocket",
  },
  sdk_download: {
    sidebar: sdkDownloadSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(sdkDownloadSidebarData),
    title: "SDK Downloads",
    subtitle: "Sapher SDK Downloads",
    contentType: "sdk_download",
  },
  support: {
    sidebar: supportSidebarData,
    toc: tocItems,
    pages: getPagesFromSidebar(supportSidebarData),
    title: "Get Support",
    subtitle: "Sapher Support",
    contentType: "support",
  },
};
export default docsConfig;









