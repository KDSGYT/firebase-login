import { FC } from 'react';
import { UserCTXConsumer } from '../../components/StateHolder/Stateholder';

interface props {
    // email: string
}

const Profile: FC<props> = ({ }) => {

    return (
        <UserCTXConsumer>
            {(value: any) => {
                // console.log(value)
                return (<div>
                    Email:{value.userInfo.email}
                </div>)
            }}
        </UserCTXConsumer>
    )
}

export default Profile;