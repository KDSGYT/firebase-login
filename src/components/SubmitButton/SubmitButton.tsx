import { FC } from 'react';
import './SubmitButton.scss';


interface props{
    submit:any
}

const SubmitButton:FC<props> = ({submit}) => {

    return (
        <span id="submit-button">
            <input type="submit" id="submit" onClick={submit} value="Next"/>

        </span>
    )
}

export default SubmitButton;