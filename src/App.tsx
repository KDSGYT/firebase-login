import './App.css';
import { useState } from 'react';
import Login from './Views/Login/Login';
import Profile from './Views/Profiile/Profile'
import { UserCTXConsumer, UserCTXProvider } from './components/StateHolder/Stateholder';

function App() {
  // Global User Data
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App App-header">
      <Login
        setUserState={setUserInfo}
      />
      {/* User data will be consumed by the following components */}
      <UserCTXProvider value={userInfo}>
        <UserCTXConsumer>
          {(userInfo: any) => (
            <Profile
              email={userInfo.email}
            />
          )}
        </UserCTXConsumer>
      </UserCTXProvider>
    </div>
  );
}

export default App;
