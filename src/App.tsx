import './App.css';
import { useEffect, useState } from 'react';
import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile'
import { UserCTXConsumer, UserCTXProvider } from './components/StateHolder/Stateholder';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import NotFound from './Views/NotFound/NotFound';

function App() {


  // Global User Data
  const data: any = localStorage.getItem('userData')
  const [userInfo, setUserInfo] = useState(JSON.parse(data));

  

  return (
    <div className="App App-header">
      <Router>
        <Switch>
          <UserCTXProvider value={{ userInfo, setUserInfo }}>

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
              <UserCTXConsumer>
                {(value: any) => {
                  // console.log(value)
                  return <Profile
                    userInfo={value.userInfo}
                  />
                }}
              </UserCTXConsumer>
            </Route>
          </UserCTXProvider>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
