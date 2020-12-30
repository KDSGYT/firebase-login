import { FC } from 'react';
import './ProfilePhoto.scss';

interface props {
    photoURL: string
}

const ProfilePhoto: FC<props> = ({ photoURL }) => {
    return (
        <aside id={`photo`}>
            <img src={photoURL} alt="" />
        </aside>
    )
}
export default ProfilePhoto;