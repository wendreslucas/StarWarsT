import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Wendres Lucas</strong>
          <span> 1234 Posts</span>
        </ProfileInfo>
      </Header>
      {/* <ProfilePage/> */}
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;
