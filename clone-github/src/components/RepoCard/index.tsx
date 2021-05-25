import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <Topsite>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topsite>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`}></div>
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;