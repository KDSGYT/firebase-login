import './Login.scss'
import { useState, useEffect } from 'react'
import TextInput from '../../components/TextInput/TextInput'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import SeperateBar from '../../components/SeperateBar/SeperateBar'
import { loginWithEmailAndPassword } from '../../assets/functions'

interface state {
    username:string,
    password:string
}

function Login() {

    const [formValues, setFormValues] = useState<state>({
        username:"",
        password:""
    });
    function handleSubmit(event:any) {
        event.preventDefault()
        loginWithEmailAndPassword(formValues.username, formValues.password)
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
            </div>
        </section>
    )
}
export default Login;