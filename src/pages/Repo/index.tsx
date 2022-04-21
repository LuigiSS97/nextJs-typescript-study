import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import logo from "../../assets/logo.png";
import pic from "../../assets/tesouro.jpeg";
import { Header, Body, Logo, Input, Subtitle, And, Instruction, Direct, Pic } from "./styles";

const Repo: React.FC = () => {
  const [rangeOne, setRangeOne] = useState<any>(0);
  const [rangeTwo, setRangeTwo] = useState<any>(0);
  const [rangeThree, setRangeThree] = useState<any>(0);
  const [rangeFour, setRangeFour] = useState<any>(0);
  const [showPic, setshowPic] = useState(false)
console.log(rangeFour);

  return (
    <>
      <Header>
        <Logo src={logo} alt="GitCollection logo" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <Body>
        <Instruction>Deslize para exibir texto</Instruction>
        <Subtitle opacity={rangeOne}>Taissa</Subtitle>
        <Input
          min={0}
          max={1}
          step={0.25}
          type="range"
          value={rangeOne}
          onChange={(e) => setRangeOne(e.target.value)}
        />
        <And opacity={rangeOne}>e</And>
        <Subtitle opacity={rangeTwo}>Luke</Subtitle>
        <Input
          min={0}
          max={1}
          step={0.1}
          type="range"
          value={rangeTwo}
          onChange={(e) => setRangeTwo(e.target.value)}
        />
        <And opacity={rangeTwo}>são as coisas mais importantes e preciosas que ja tive na vida</And>
        <Input
          min={0}
          max={1}
          step={0.1}
          type="range"
          value={rangeThree}
          onChange={(e) => setRangeThree(e.target.value)}
        />
        <And opacity={rangeThree}> Eu gostaria muito de continuar sendo pai dessa família, mesmo que sob dois tetos. Me dá uma segunda chance?</And>
        <br/>
        <Input
          min={0}
          max={1}
          step={0.1}
          type="range"
          value={rangeFour}
          onChange={(e) => setRangeFour(e.target.value)}
        />
        <And opacity={rangeFour}>Aqui vai uma prova do quanto vocês me completam:</And>
        {rangeFour === "1" && (
          <Direct onClick={() => setshowPic(!showPic)}>Mostrar</Direct>
        )}
        {(showPic && rangeFour === '1') && (
          <Pic src={pic} alt="Taissa e Luke" />
        )}
      </Body>
    </>
  );
};
export default Repo;
