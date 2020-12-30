import { FC } from 'react';
import './SubmitButton.scss';


interface props {
    submit: any,
    className?: string
    value: string
}

const SubmitButton: FC<props> = ({ submit, className, value }) => {

    return (
        <span id="submit-button" className={className}>
            <input type="submit" id="submit" onClick={submit} value={value} />

        </span>
    )
}

export default SubmitButton;