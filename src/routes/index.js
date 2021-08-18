import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Portfolio from "../components/portfolio/Portfolio";

const routes = [
    {
        path: '/portfolio',
        component: Portfolio,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/',
        component: Home,
        // exact: true  // @todo: Removed this just to publish the app on Github Page, otherwise, please add it
    },
]

export default routes;