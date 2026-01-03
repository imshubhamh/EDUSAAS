import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ContentDescription from "../components/blog/ContentDescription";

export const mainRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <ContentDescription /> },
  { path: "/register", element: <Register /> },
];
