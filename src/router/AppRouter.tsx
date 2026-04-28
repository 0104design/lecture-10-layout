import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Login from "../pages/Login.tsx";

// AppRouter는 컴포넌트가 아닌 함수임.
// 매개변수 자리에 onClick이 들어옴 => 타입 명시
// () => void : VoidFunction

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
