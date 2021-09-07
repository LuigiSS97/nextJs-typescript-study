import React from "react";
import logo  from "../../assets/logo.svg";
import { Container, Title, Form } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="GitColection"/>
      <Title>DashBoard </Title>
      <Form>
        <input placeholder="username/repository_name"/>
        <button type="submit">Buscar</button>
      </Form>
    </Container>

  );
};
