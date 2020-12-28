import { FC } from 'react';

interface props {
    email: string
}

const Profile: FC<props> = ({ email }) => {

    return (
        <div>
            Email:{email}
        </div>
    )
}

export default Profile;