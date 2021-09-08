import Main from '../components/Main'
import LoginTextField from "../components/LoginTextField"

export default function login() {

    return(
        <div>
            <Main as="form">
                <LoginTextField
                    title="Username"
                    name="username"
                    value={null}
                    onChange={null}
                />
                <LoginTextField
                title="Password"
                name="password"
                value={null}
                onChange={null}
                />
            </Main>

            <div>
                <label>Username:</label>
                <br/>
                <input type="text"/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type="text"/>

            </div>
        </div>
    );
}