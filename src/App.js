import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import { Login } from './Components/Login';
import { Main } from './Components/Main';
import { Navbar } from './Components/Navbar';
import { Profile } from './Components/Profile';

function App() {
  const { isAuth, name } = useSelector(state => state.AuthReducer)
  console.log(isAuth, name)
  return (
    <>
      <Navbar isAuth={isAuth} />
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/profile'>
        <Profile name={name} isAuth={isAuth} />
      </Route>
      <Route path='/login'>
        <Login isAuth={isAuth} />
      </Route>
    </>
  );
}

export default App;
