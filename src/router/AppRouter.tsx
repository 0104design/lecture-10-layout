import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Login from "../pages/Login.tsx";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true,  element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        {
            path: "/auth/login",
            element: <Login />,
        },
    ];

    return createBrowserRouter(routes);
};
