import {Link, useLocation} from 'react-router-dom';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports'
import AddIcon from '@mui/icons-material/Add'
import styled from "styled-components/macro";
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ManageSearchIcon from '@mui/icons-material/ManageSearch'

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
                label="Add Motorycle"
                value="/createMotorcycle"
                icon={<AddIcon />}
                component={Link}
                to="/createMotorcycle"
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
            <BottomNavigationAction
                label="Received Invites"
                value="/receivedInvites"
                icon={<MarkunreadMailboxIcon />}
                component={Link}
                to="/receivedInvites"
            />
            <BottomNavigationAction
                label="Sent Invites"
                value="/sentInvites"
                icon={<ForwardToInboxIcon />}
                component={Link}
                to="/sentInvites"
            />
            <BottomNavigationAction
                label="Search Riders"
                value="/search"
                icon={<ManageSearchIcon />}
                component={Link}
                to="/search"
            />
        </BottomNavigation>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  display: flex;
  overflow-y: scroll;
  margin-bottom: 0;
  padding-bottom: 0;
  position: fixed;
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