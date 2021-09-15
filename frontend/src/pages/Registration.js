import TextField from "../components/TextField";
import Main from "../components/Main";


export default function Registration() {

    return(
        <Main>
                <TextField
                    title={"Username"}
                name="username"
                value={null}
                onChange={null}
                />
                <TextField
                    title="Password :"
                    name="password"
                    value={null}
                    onChange={null}
                />
                <TextField
                    title="E-Mail :"
                    name="eMail"
                    value={null}
                    onChange={null}
                />
            <TextField
                title="First name :"
                name="firstname"
                value={null}
                onChange={null}
            />
            <TextField
                title="Last name:"
                name="lastname"
                value={null}
                onChange={null}
            />
            <TextField
                title="Age :"
                name="age"
                value={null}
                onChange={null}
            />
            <TextField
                title="Location :"
                name="location"
                value={null}
                onChange={null}
            />
            <TextField
                title="Driving Experience: "
                name="drivingexperience"
                value={null}
                onChange={null}
            />
            <TextField
                title="Driving Style :"
                name="drivingstyle"
                value={null}
                onChange={null}
            />
        </Main>
    );
}