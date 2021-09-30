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
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'
import {useAuth} from "../auth/AuthProvider";

export default function NavBar() {

    const location = useLocation()
    const { user } = useAuth()

    return (
        <BottomNavi>
            <BottomNavigation value={location.pathname}>

                <BottomNavigationAction
                    label="Landing Page"
                    value="/"
                    icon={<HomeIcon/>}
                    component={Link}
                    to="/"
                />
                {!user && (
                    <BottomNavigationAction
                        label="Registration"
                        value="/registration"
                        icon={<AppRegistrationIcon/>}
                        component={Link}
                        to="/registration"
                    />
                )}
                {!user && (
                    <BottomNavigationAction
                        label="Login"
                        value="/login"
                        icon={<LoginIcon/>}
                        component={Link}
                        to="/login"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="Edit Account"
                        value="/editAccount"
                        icon={<SportsMotorsportsIcon/>}
                        component={Link}
                        to="/editAccount"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="My Motorcycles"
                        value="/myMotorcycles"
                        icon={<TwoWheelerIcon/>}
                        component={Link}
                        to="/myMotorcycles"
                    />
                )}
                {((location.pathname === "/myMotorcycles" || location.pathname === "/createMotorcycle") && (
                    <BottomNavigationAction
                        label="Add Motorcycle"
                        value="/createMotorcycle"
                        icon={<AddIcon/>}
                        component={Link}
                        to="/createMotorcycle"
                    />
                ))}
                {location.pathname === "/editAccount" && (
                    <BottomNavigationAction
                        label="DeleteAccount"
                        value="/registration"
                        icon={<DeleteForeverIcon/>}
                        component={Link}
                        to="/deleteAccount"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="Received Invites"
                        value="/receivedInvites"
                        icon={<MarkunreadMailboxIcon/>}
                        component={Link}
                        to="/receivedInvites"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="Sent Invites"
                        value="/sentInvites"
                        icon={<ForwardToInboxIcon/>}
                        component={Link}
                        to="/sentInvites"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="Search Riders"
                        value="/search"
                        icon={<ManageSearchIcon/>}
                        component={Link}
                        to="/search"
                    />
                )}
                {user && (
                    <BottomNavigationAction
                        label="Logout"
                        value="/logout"
                        icon={<LogoutIcon/>}
                        component={Link}
                        to="/logout"
                    />
                )}
            </BottomNavigation>
        </BottomNavi>
    );
}

const BottomNavi = styled.nav`
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;

`