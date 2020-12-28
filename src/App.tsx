import './App.css';
import { useState } from 'react';
import Login from './Views/Login/Login';
import Profile from './Views/Profiile/Profile'
import { UserCTXConsumer, UserCTXProvider } from './components/StateHolder/Stateholder';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import NotFound from './Views/NotFound/NotFound';

function App() {

  // Global User Data
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="App App-header">
      <Router>
        <Switch>

          {/* Route to login page */}
          <Route exact path="/">
            <Redirect to="/login" /> {/*redirect to login page */}
          </Route>

          <Route exact path="/login">
            <Login
              setUserState={setUserInfo}
            />
          </Route>

          {/* User should only be able to access this link is loggedin */}
          <Route exact path="/profile">
            
            {/* User data will be consumed by the following components */}
            <UserCTXProvider value={userInfo}>
              <UserCTXConsumer>
                {(userInfo: any) => {
                  console.log(userInfo)
                  return <Profile
                    email={userInfo.email}
                  />
                }}
              </UserCTXConsumer>
            </UserCTXProvider>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
