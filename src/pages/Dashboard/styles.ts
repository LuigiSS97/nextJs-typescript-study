import styled from "styled-components";

import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  padding: 2em 0;
`;

export const Title = styled.div`
  color: #3a3a3a;
  font-size: 38px;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: ${({ hasError }) =>
      hasError ? "2px solid #c53030" : " 2px solid #fff"};
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: white;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }
`;

export const RepoList = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;
export const LinkCard = styled.a`
  background: white;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translate(6px);
  }

  & + a {
    margin-top: 16px;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
export const Logo = styled.img`
  width: 80vw;
  max-width: 500px;
`;

export const Error = styled.p`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const SliderWrapper = styled.div`
  max-width: 40em;
  width: 93vw;
  height: 500px;
  background: #fff;
margin-bottom: 30px;
`;

export const Direct = styled.button`
background-color: #00909C;
color: white;
border-color: transparent;
font-weight: 600;
padding: 10px 20px;
border-radius: 5px;
max-width: 25em;
width: 100%;
text-decoration:none;
font-size: 1.2em;

&:hover,
&:active {
  background-color: #004976;
}
`

