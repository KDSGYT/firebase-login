import { Button } from "@material-ui/core";
import { loginWithGoogle } from "../../assets/functions";
import './GoogleLogin.scss';

// import * as signInWithGoogleGraphic from '../../assets/img/google-login.png'

const GoogleLogin = () => {
    return (
        // <Button 
        //     id="google-login-button"
        // >
        // </Button>
        <Button
            onClick={loginWithGoogle}
        >
            <div id="gSignInWrapper">
                {/* <span className="label">Sign in with:</span> */}
                <div id="customBtn" className="customGPlusSignIn">
                    <span className="icon"></span>
                    <span className="buttonText">Google</span>
                </div>
            </div>
            <div id="name"></div>
        </Button>
    )
}

export default GoogleLogin