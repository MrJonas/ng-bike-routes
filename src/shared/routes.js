import Home from "./pages/home";
import About from "./pages/about";
import RoutesSearch from "./pages/search.routes"
import MapPage from "./pages/map"
import RoutePage from "./pages/route"

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/marsrutai",
        component: RoutesSearch
    },
    {
        path: "/marsrutas/:url",
        component: RoutePage
    },
    {
        path: "/zemelapis",
        component: MapPage
    },
    {
        path: "/apie",
        component: About
    }
];

export default routes;
