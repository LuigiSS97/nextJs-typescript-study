import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";
import {
  Container,
  Title,
  Form,
  RepoList,
  Error,
  LinkCard,
  SliderWrapper,
  Logo,
  Direct,
} from "./styles";
import { Link } from "react-router-dom";
import Carousel from "../../components/swiper";

type Owner = {
  login: string;
  avatar_url: string;
};
interface GithubRepository {
  full_name: string;
  description: string;
  owner: Owner;
}

const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem("@GitCollection:repositories");
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState("");
  const [lastIndex, setLastIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("@GitCollection:repositories", JSON.stringify(repos));
  }, [repos]);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setNewRepo(event.target.value);
    },
    [setNewRepo]
  );

  async function handleSearchRepo(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      if (!newRepo) {
        setError("Deve ser adicionado um nome para busca");
        return;
      }
      const { data } = await api.get<GithubRepository>(`repos/${newRepo}`);
      setNewRepo("");
      setError("");
      setRepos((prev) => [...prev, data]);
    } catch (error) {
      setError("Repositório não encontrado");
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="GitColection" />
      <Title>Deslize para ver mais</Title>
      <SliderWrapper>
        <Carousel lastIndex={setLastIndex} setCurrentIndex={setCurrentIndex} />
      </SliderWrapper>
      {currentIndex === lastIndex && (
        <a href="/tubirnas">
          <Direct>Quer saber porque das fotos?</Direct>
        </a>
      )}
    </Container>
  );
};
export default Dashboard;
