import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const OpcaoHeader = styled.ul`
  display: flex;
`;
const OpcaoListHeader = styled.li`
  font-size: 16px;
  min-width: 120px;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <OpcaoHeader>
      {textoOpcoes.map((texto) => (
        <OpcaoListHeader>
          <p>{texto}</p>
        </OpcaoListHeader>
      ))}
    </OpcaoHeader>
  );
}
export default OpcoesHeader;
