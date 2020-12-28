import { Button } from "@material-ui/core";
import { loginWithGoogle } from "../../assets/functions";
import { UserCTXConsumer } from "../StateHolder/Stateholder";
import './GoogleLogin.scss';

const GoogleLogin = () => {

    /**
     * 
     * @param value CTX value recevied with function
     */
    async function handleClick(value: any) {
        await loginWithGoogle(value.setUserInfo) // function to set state

    }

    return (
        <UserCTXConsumer>
            {(value: any) => (
                <Button
                    onClick={() => handleClick(value)}
                >
                    {/* Google Signin Code */}
                    <div id="gSignInWrapper">
                        <div id="customBtn" className="customGPlusSignIn">
                            <span className="icon"></span>
                            <span className="buttonText">Google</span>
                        </div>
                    </div>
                </Button>
            )}
        </UserCTXConsumer>
    )
}

export default GoogleLogin