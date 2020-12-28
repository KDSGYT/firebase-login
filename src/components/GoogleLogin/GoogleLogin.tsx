import { Button } from "@material-ui/core";
import './GoogleLogin.scss';
const GoogleLogin = () =>{
    return (
        <Button 
            id="google-login-button"
        >
            <span id="logo"></span>
            SignIn With Google
        </Button>
    )
}

export default GoogleLogin