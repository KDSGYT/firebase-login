import './TextInput.scss';
import TextField from '@material-ui/core/TextField';

function TextInput() {
    return (
        <TextField
            className="text-input"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
        />
    )
}
export default TextInput;