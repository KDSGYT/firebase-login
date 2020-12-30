import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../assets/functions';
import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Profile.scss'


interface props {
    userInfo: any
}
const Profile: FC<props> = ({ userInfo }) => {

    const history = useHistory();
    const { email, photoURL, name } = userInfo;

    function handleSubmit(e:any) {
        e.preventDefault()
        logOut(() => history.push('/login'));
    }

    return (
        <section id="profile">
            <div id="upper-section">
                <ProfilePhoto
                    photoURL={photoURL}//change the size of picture
                />
                <h1>{name}</h1>
            </div>
            <div id="lower-section">
                <h3>{email}</h3>
            </div>
            <SubmitButton
                submit={handleSubmit}
                value="Log Out"

            />
        </section>
    )
}

export default Profile;