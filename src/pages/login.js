import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            props.setIsAuth(true);
            navigate("/");
        });
    }

    return (
        <div className='loginpage'>
            <p>SignIn with google to continue</p>
            <button className='login-with-google-button' onClick={signInWithGoogle}>SignIn with google</button>
        </div>
    );
};

export default Login;