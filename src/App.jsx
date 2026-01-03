import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { mainRoutes } from "./routes/AppRoutes";
import MainLayout from "./layout/MainLayout";

function RouteWithSlash() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;

    if (pathname !== "/" && !pathname.endsWith("/")) {
      navigate(`${pathname}/${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {mainRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

function App() {
  return <RouteWithSlash />;
}

export default App;
