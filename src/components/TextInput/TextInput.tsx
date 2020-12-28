import './TextInput.scss';
import TextField from '@material-ui/core/TextField';
import { FC } from 'react';


interface props {
    setFormValues: any;
    formValues: object;
}

const TextInput: FC<props> = ({ setFormValues, formValues }) => {

    function handleChange(event: any) {
        // console.log(event.currentTarget.value)
        setFormValues({ ...formValues, username: event.currentTarget.value })
    }

    return (
        <TextField

            className="text-input"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={handleChange}
        />
    )
}
export default TextInput;