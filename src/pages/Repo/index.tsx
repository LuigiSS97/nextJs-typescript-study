import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import {
  Header,
  Body,
  ContentWrapper,
  ContentHeader,
  ContentTitle,
  ContentSubTitle,
  ContentList,
  ContentListItem,
  ListTitle,
  ListContent,
  Issues,
  IssuesTitle,
  IssuesContent,
  IssueWrapper,
  IconWrapper,
  IssueLink,
} from "./styles";
import { api } from "../../services/api";

type repositoryParam = {
  repositoryId: string;
};
interface GithubRepository {
  full_name: string;
  description: string;
  owner: Owner;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
}

type Owner = {
  login: string;
  avatar_url: string;
};

interface GitHubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repo: React.FC = () => {
  const [repository, setRepository] = useState<GithubRepository | null>(null);
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const { repositoryId } = useParams<repositoryParam>();

  useEffect(() => {
    api
      .get(`repos/${repositoryId}`)
      .then((response) => setRepository(response.data));

    api
      .get(`repos/${repositoryId}/issues`)
      .then((response) => setIssues(response.data));
  }, []);

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection logo" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      {repository && (
        <Body>
          <ContentWrapper>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <ContentHeader>
              <ContentTitle>{repository.full_name}</ContentTitle>
              <ContentSubTitle>{repository.description}</ContentSubTitle>
            </ContentHeader>
          </ContentWrapper>
          <ContentList>
            <ContentListItem>
              <ListTitle>{repository.stargazers_count}</ListTitle>
              <ListContent>Stars</ListContent>
            </ContentListItem>
            <ContentListItem>
              <ListTitle>{repository.forks_count}</ListTitle>
              <ListContent>Forks</ListContent>
            </ContentListItem>
            <ContentListItem>
              <ListTitle>{repository.open_issues_count}</ListTitle>
              <ListContent>Issues aberta</ListContent>
            </ContentListItem>
          </ContentList>
          <Issues>
            {issues.map((item) => (
              <IssueLink href={item.html_url} key={item.id}>
                <IssueWrapper>
                  <IssuesTitle>{item.title}</IssuesTitle>
                  <IssuesContent>{item.user.login}</IssuesContent>
                </IssueWrapper>

                <IconWrapper>
                  <FiChevronRight size="20px" />
                </IconWrapper>
              </IssueLink>
            ))}
          </Issues>
        </Body>
      )}
    </>
  );
};
export default Repo;
