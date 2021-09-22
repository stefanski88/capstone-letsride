import {Link, useLocation} from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports'
import styled from "styled-components/macro";

export default function NavBar() {

    const location = useLocation()

    return (
        <Wrapper>
        <BottomNavigation value={location.pathname}>
            <BottomNavigationAction
                label="Landing Page"
                value="/landing"
                icon={<HomeIcon />}
                component={Link}
                to="/landing"
            />
            <BottomNavigationAction
                label="Login"
                value="/login"
                icon={<LoginIcon />}
                component={Link}
                to="/login"
            />
            <BottomNavigationAction
                label="EditAccount"
                value="/editAccount"
                icon={<AccountCircleIcon />}
                component={Link}
                to="/editAccount"
            />
            <BottomNavigationAction
                label="My Motorcycle"
                value="/myMotorcycle"
                icon={<SportsMotorsportsIcon />}
                component={Link}
                to="/myMotorcycle"
            />
            <BottomNavigationAction
                label="My Motorcycles"
                value="/myMotorcycles"
                icon={<SportsMotorsportsIcon />}
                component={Link}
                to="/myMotorcycles"
            />
            <BottomNavigationAction
                label="DeleteAccount"
                value="/registration"
                icon={<DeleteForeverIcon />}
                component={Link}
                to="/deleteAccount"
            />
            <BottomNavigationAction
                label="Logout"
                value="/logout"
                icon={<LogoutIcon />}
                component={Link}
                to="/logout"
            />
        </BottomNavigation>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  border-top: 1px solid var(--neutral-dark);
  width: 100%;
  padding: var(--size-m);
  display: flex;
  overflow-y: scroll;
  a {
    flex-grow: 1;
    margin: 0 var(--size-l);
    text-align: center;
    text-decoration: none;
    color: var(--neutral-dark);
  }
  a.active {
    color: var(--accent);
  }
`