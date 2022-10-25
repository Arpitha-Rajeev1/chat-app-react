import React from 'react';
import styled from 'styled-components';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import { Button } from '@material-ui/core';
import { HelpOutlineOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {

  const [user] = useAuthState(auth);
  const logout = () => {
    auth.signOut();
  }
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
        <ForumOutlinedIcon />
      </HeaderLeft>

      <HeaderSearch>
        <input type="text" placeholder='Search for friends...' />
        <SavedSearchOutlinedIcon />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineOutlined /> 
        <Button hidden type='submit' onClick={logout}>Logout</Button>
      </HeaderRight>

    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--chat-color);
    color: black
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #86d7ee;
  text-align: center;
  display: flex;
  padding: 0 10px;
  color: black;
  border: 1px black solid;
  justify-content: inherit;

  > input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: none;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;


  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }

  > button {
        margin: 0px 10px;
        background-color: green;
        padding: 10px;
        color: white;
        :hover {
            background-color: greenyellow;
            color: black;
        }
    }
`;  