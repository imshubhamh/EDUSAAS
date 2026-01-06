import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ContentDescription from "../components/blog/ContentDescription";
import Pricing from "../pages/Pricing";
import AboutPage from "../pages/AboutPage";
import FAQPage from "../pages/FAQPage";
import Contact from "../pages/Contact";
import Careers from "../pages/Careers";

export const mainRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/register", element: <Register /> },

  /* Product */
  { path: "/pricing", element: <Pricing /> },


  // Resources
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <ContentDescription /> },
  { path: "/faqs", element: <FAQPage /> },
   { path: "/support", element: <Contact /> },


  // Company
  { path: "/about", element: <AboutPage /> },
   { path: "/careers", element: <Careers /> },

];
