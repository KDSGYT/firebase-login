import { Button } from "@material-ui/core";
import { loginWithGoogle } from "../../assets/functions";
import './GoogleLogin.scss';

// import * as signInWithGoogleGraphic from '../../assets/img/google-login.png'

const GoogleLogin = () =>{
    return (
        <Button 
            id="google-login-button"
            onClick={loginWithGoogle}
        >
        </Button>
    )
}

export default GoogleLogin