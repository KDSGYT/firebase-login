import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { loginWithGoogle } from "../../assets/functions";
import { UserCTXConsumer } from "../StateHolder/Stateholder";
import './GoogleLogin.scss';

const GoogleLogin = () => {

    const history: any = useHistory();

    /**
     * 
     * @param value CTX value recevied with function
     */
    async function handleClick(e:any,value: any) {
        e.preventDefault()
        await loginWithGoogle(value.setUserInfo, () =>history.push('/profile')) // function to set state


    }

    return (
        <UserCTXConsumer>
            {(value: any) => (
                <Button
                    onClick={(e:any) => handleClick(e,value)}
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