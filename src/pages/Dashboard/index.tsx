import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { api } from "../../services/api";
import {
  Container,
  Title,
  Form,
  RepoList,
  Error,
  LinkCard,
  ProfileImage,
} from "./styles";
import { Link } from "react-router-dom";

type Owner = {
  login: string;
  avatar_url: string;
};
interface GithubRepository {
  full_name: string;
  description: string;
  owner: Owner;
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem("@GitCollection:repositories");
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState("");
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
      setRepos((prev) => [...prev, data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(newRepo);

  return (
    <Container>
      <img src={logo} alt="GitColection" />
      <Title>DashBoard </Title>
      <Form hasError={Boolean(error)} onSubmit={handleSearchRepo}>
        <input
          placeholder="username/repository_name"
          onChange={(event) => handleOnChange(event)}
          value={newRepo}
        />
        <button type="submit">Buscar</button>
      </Form>
      {error && <Error>{error}</Error>}
      <RepoList>
        {repos.map((repository) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/repositorios/${repository.full_name}`}
            key={repository.full_name}
          >
            <LinkCard>
              <ProfileImage
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size="20px" />
            </LinkCard>
          </Link>
        ))}
      </RepoList>
    </Container>
  );
};
