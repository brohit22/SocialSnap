import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './Actions/User';
import Home from './Components/Home';
import Account from './Components/Account';
import NewPost from './Components/NewPost';
import Register from './Components/Register';
import UpdateProfile from './Components/UpdateProfile';
import UpdatePassword from './Components/UpdatePassword';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import UserProfile from './Components/UserProfile';
import Search from './Components/Search';
import NotFound from './Components/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Router>
      {isAuthenticated && <Header />}

      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />
        <Route
          path='/account'
          element={isAuthenticated ? <Account /> : <Login />}
        />

        <Route
          path='/register'
          element={isAuthenticated ? <Account /> : <Register />}
        />

        <Route
          path='/newpost'
          element={isAuthenticated ? <NewPost /> : <Login />}
        />

        <Route
          path='/update/profile'
          element={isAuthenticated ? <UpdateProfile /> : <Login />}
        />
        <Route
          path='/update/password'
          element={isAuthenticated ? <UpdatePassword /> : <Login />}
        />

        <Route
          path='/forgot/password'
          element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />}
        />

        <Route
          path='/password/reset/:token'
          element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />}
        />

        <Route
          path='/user/:id'
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route path='search' element={<Search />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
