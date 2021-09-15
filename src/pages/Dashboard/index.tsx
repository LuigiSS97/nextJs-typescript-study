import React from "react";
import logo  from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { Container, Title, Form, RepoList } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="GitColection"/>
      <Title>DashBoard </Title>
      <Form>
        <input placeholder="username/repository_name"/>
        <button type="submit">Buscar</button>
      </Form>

      <RepoList>
        <a href="/repositories">
          <img src="" alt="Repositorio"/>
          <div>
            <strong>luigidev/curso-type</strong>
            <p>Respositorio de tchulis</p>
          </div>
          <FiChevronRight size="20px"/>
        </a>

      </RepoList>
    </Container>

  );
};
