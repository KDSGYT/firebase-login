import './Login.scss'
import TextInput from '../../components/TextInput/TextInput'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import SeperateBar from '../../components/SeperateBar/SeperateBar'

function Login() {

    return (
        <section id="login">
            <div id="inner-border">
                <h1>Login</h1>
                <form noValidate id="login-form" >
                    <TextInput />
                    <PasswordInput />
                    <SubmitButton />
                </form>
                <SeperateBar />
            </div>
        </section>
    )
}
export default Login;