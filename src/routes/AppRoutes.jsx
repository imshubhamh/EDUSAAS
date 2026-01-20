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
import PrivacyPage from "../pages/PrivacyPage";
import Terms from "../pages/Terms";
import Changelog from "../pages/Changelog";
import Documentation from "../pages/Documentation";
import Roadmap from "../pages/Roadmap";

export const mainRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/register", element: <Register /> },

  /* Product */
  { path: "/pricing", element: <Pricing /> },


  // Resources
  { path: "/docs", element: <Documentation /> },
  { path: "/docs/:slug?", element: <Documentation /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <ContentDescription /> },
  { path: "/faqs", element: <FAQPage /> },
  { path: "/support", element: <Contact /> },
  { path: "/roadmap", element: <Roadmap /> },


  // Company
  { path: "/about", element: <AboutPage /> },
  { path: "/careers", element: <Careers /> },
  { path: "/privacy-policy", element: <PrivacyPage /> },
  { path: "/terms", element: <Terms /> },
  { path: "/changelog", element: <Changelog /> },
  

];
