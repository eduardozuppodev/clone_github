import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username = {'eduardozuppodev'}
            name={'Eduardo Alves Zuppo'}
            avatarUrl={'https://avatars.githubusercontent.com/u/69389822?v=4'}
            followers={654}
            following={56}
            company={'TheDevs'}
            location={'São Paulo, Brazil'}
            email={'eduzuppo@gmail.com'}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>

        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;