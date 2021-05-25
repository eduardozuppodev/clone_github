import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


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
            company={'Grupo Freitas'}
            location={'São Paulo, Brazil'}
            email={'zuppo.edu@gmail.com'}
            blog={'https://www.linkedin.com/in/eduardo-zuppo-8878731a3/'}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random Repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'eduardozuppodev'}
                  reponame={'github-clone'}
                  description={'Clone of the Github profile page'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;