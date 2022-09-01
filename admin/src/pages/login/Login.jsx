import './login.scss';
import { useState, useContext } from 'react';
import { AuthContext } from './../../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      if (res.data.isAdmin) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
        navigate('/');
      } else {
        dispatch({ type: 'LOGIN_FAILED', payload: {message: "You Are Not Admin"} });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILED', payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h1>Login</h1>
        <span className="errMsg">{error && <span>{error.message}</span>}</span>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleLogin} className="loginBtn">
          Login
        </button>
        <div className="signupLink">
          Not a member? <Link to="/">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
