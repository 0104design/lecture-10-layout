import { RouterProvider } from "react-router";
import { AppRouter } from "./router/AppRouter.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useEffect, useState } from "react";

function App() {
    // 초기값 자리에 함수를 넣을수도 있음
    // useState가 state를 만들 때 그, 함수를 실행키고 난 결과를 초기값으로 사용함.
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        // 로컬 스토리지에서 가져오는 값은 무조건 string | null
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    const onClick = () => {
        // setState에도 매개변수를 함수로 작설할 수 있는데 이 떄 매개변수 자리에는
        // 지금 현재 state 값이 들어옴.
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };
    return (
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}

export default App;
