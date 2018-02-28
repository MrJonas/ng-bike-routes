import Home from "./pages/home";
import News from "./pages/news";
import About from "./pages/about";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/news",
        component: News
    },
    {
        path: "/apie",
        component: About
    }
];

export default routes;
