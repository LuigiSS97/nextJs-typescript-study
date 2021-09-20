import React from "react";
import { useParams } from "react-router";

type repositoryParam = {
  repository: string
}

export const Repo: React.FC = () => {
  const {repository} = useParams<repositoryParam>()


  return (
  <div>Repositorio: </div>
  );
};
