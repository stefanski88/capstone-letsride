import {Link, useLocation} from 'react-router-dom'
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export default function NavBar() {

    const location = useLocation()

    return (
        <div>
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
        </div>
    );
}