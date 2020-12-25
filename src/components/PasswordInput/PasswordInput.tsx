import { useState, FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import './PasswordInput.scss';

interface State {
    password: string;
    showPassword: boolean;
}

interface props {
    setFormValues: any;
    formValues: Object;
}

const PasswordInput: FC<props> = ({ setFormValues, formValues }) => {

    const [values, setValues] = useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        setFormValues({...formValues, password: values.password })
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControl variant="outlined" id="password-input">
            {/* Label for the password input field */}
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

            {/* Password Input field */}
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">

                        {/* Toggle visibility */}
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>

                    </InputAdornment>
                }

                labelWidth={70}
            />

        </FormControl>
    )
}

export default PasswordInput;