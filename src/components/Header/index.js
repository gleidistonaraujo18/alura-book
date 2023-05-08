import Logo from "../../components/Logo";
import OpcoesHeader from "../../components/OpcoesHeader";
import IconesHeader from "../../components/IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo /> {/* chamando o componente Logo */}
      <OpcoesHeader /> {/* chamando o componente OpcoesHeader */}
      <IconesHeader /> {/* chamando o componente Icones */}
    </HeaderContainer>
  );
}
export default Header;
