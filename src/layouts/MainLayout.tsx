import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;

const Main = styled.main`
    flex: 1;
`;

// 메인 레이아웃은 컴포넌트 : 프롭스로 전달받아야 함.
function MainLayout({ onClick }: { onClick: VoidFunction }) {
    return (
        <Wrap>
            <Header onClick={onClick} />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
