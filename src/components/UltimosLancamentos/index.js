import { livros } from "./dadosUltimosLancamentos";
import CardRecomenda from "../CardRecomenda";
import { Titulo } from "../Titulo";
import imagemLivro from "../../image/livro2.png"
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px" alinhamento="center">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livros) => (
          <img src={livros.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interessa por..."
        subtitulo="Sql Server"
        descricao="Consultas avançadas com Boas Práticas"
        img={imagemLivro}
      />
      <CardRecomenda
        titulo="Talvez você se interessa por..."
        subtitulo="Php"
        descricao="Orientação a Objetos"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
