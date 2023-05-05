import "./estilo.css";
import Logo from "../../components/Logo";
import OpcoesHeader from "../../components/OpcoesHeader";
import IconesHeader from "../../components/IconesHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo /> {/* chamando o componente Logo */}
      <OpcoesHeader /> {/* chamando o componente OpcoesHeader */}
      <IconesHeader /> {/* chamando o componente Icones */}
    </header>
  );
}
export default Header;
