
import {Link, useLocation} from 'react-router-dom'
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {AccountBox, Home} from "@mui/icons-material";

export default function NavBar() {

    const location = useLocation()

    return (
        <div>
        <BottomNavigation value={location.pathname}>
            <BottomNavigationAction
                label="Landing Page"
                value="/landing"
                icon={<Home />}
                component={Link}
                to="/landing"
            />
            <BottomNavigationAction
                label="DeleteAccount"
                value="/registration"
                icon={<AccountBox />}
                component={Link}
                to="/deleteAccount"
            />
        </BottomNavigation>
        </div>
    );
}