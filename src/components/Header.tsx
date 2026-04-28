import styled from "styled-components";
import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme/ThemeContext.tsx";

const Head = styled.header`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.color.muted};
`;

const NavLeft = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const NavRight = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

function Header() {
    const context = useContext(ThemeContext);
    //  throw new Error => 에러를 발생시키는 명령 이 아래로 진행 불가.
    if (!context) throw new Error("Provider 안에서 사용해주세요!");

    return (
        <Head>
            <NavLeft>
                <Logo>My App</Logo>
                <Nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                </Nav>
            </NavLeft>
            <NavRight>
                <Link to={"/auth/login"}>로그인</Link>
                <button onClick={context.toggleTheme}>테마토글</button>
            </NavRight>
        </Head>
    );
}

export default Header;
