import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';


const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'eduardozuppodev'}
            name={'Eduardo Zuppo'}
            avatarUrl={'https://avatars.githubusercontent.com/u/69389822?v=4'}
            followers={654}
            following={56}
            company={'TheDevs'}
            location={'São Paulo, Brazil'}
            email={'eduzuppo@gmail.com'}
            blog={'https://www.linkedin.com/in/eduardo-zuppo-8878731a3/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => {
                <RepoCard
                  key={n}
                  username={'eduardozuppodev'}
                  reponame={'github-clone'}
                  description={'Clone of the Github profile page'}
                  language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              })}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;