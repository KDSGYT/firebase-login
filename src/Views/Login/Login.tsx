import './Login.scss'
import { useState, useEffect, FC } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import SeperateBar from '../../components/SeperateBar/SeperateBar'
import { loginWithEmailAndPassword } from '../../assets/functions'
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin'

interface state {
    username: string,
    password: string
}

interface props{
    setUserState: any
 
}

const Login: FC<props> = ({setUserState}) => {

    const [formValues, setFormValues] = useState<state>({
        username: "",
        password: "",
    });
    function handleSubmit(event: any) {
        event.preventDefault()
        loginWithEmailAndPassword(formValues.username, formValues.password, setUserState)
        window.location.replace('#/profile')
    }

    return (
        <section id="login">
            <div id="inner-border">
                <h1>Login</h1>
                <form noValidate id="login-form" >
                    <TextInput
                        setFormValues={setFormValues}
                        formValues={formValues}
                    />
                    <PasswordInput
                        setFormValues={setFormValues}
                        formValues={formValues}
                    />
                    <SubmitButton
                        submit={handleSubmit}
                    />
                </form>
                <SeperateBar />
                <GoogleLogin />
            </div>
        </section>
    )
}
export default Login;