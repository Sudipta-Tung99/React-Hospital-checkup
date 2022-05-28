
import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { BsGoogle, BsFacebook } from "react-icons/bs";

import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";
import { app } from '../../Firebase/FirebaseConfig';
import context from 'react-bootstrap/esm/AccordionContext';
import { context1 } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactLocation } from 'react-location';



function Login() {
    const [pass, setpass] = useState(false);
    const [user, setuser] = useState(false)
    const [loginUser, setLoginUser] = useState({
        sinein: false,
        name: '',
        email: '',
        password: '',
        uid: '',
        error: '',
        sucess: false,

    });
    const [auth, setauth] = useContext(context1)

    let navigates = useNavigate();
    let location = useLocation();


    let { from } = location.state || { from: { pathname: `/ ` } };
    console.log(from);




    const handlblur = (e) => {
        let isFromValid = true;

        if (e.target.name === 'email') {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);


        }
        if (e.target.name === 'password') {
            const passlen = e.target.value;
            const length = passlen.length > 6;
            const pass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/.test(e.target.value);
            isFromValid = length && pass;



        }
        if (isFromValid) {
            const newUser = { ...loginUser };
            newUser[e.target.name] = e.target.value;
            setLoginUser(newUser)

        }

    }

    const submit = (e) => {
        if (user && loginUser.email && loginUser.password) {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    const newuser = { ...loginUser };
                    newuser.error = '';
                    newuser.sucess = true;
                    setLoginUser(newuser)
                    // ...
                })
                .catch((error) => {


                    const newuser = { ...loginUser };
                    newuser.error = error.message;
                    newuser.sucess = false;
                    setLoginUser(newuser)


                });
        }
        if (!user && loginUser.email && loginUser.password) {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    const newuser = { ...loginUser };
                    newuser.error = '';
                    newuser.sucess = true;
                    setLoginUser(newuser);
                    setauth(newuser)
                    setpass(newuser.error)
                    navigates(from);


                })
                .catch((error) => {
                    const newuser = { ...loginUser };
                    newuser.error = error.message;
                    newuser.sucess = false;
                    setpass(newuser.error)



                });


        }

        e.preventDefault();
    }



    const handler = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email, uid, } = result.user;


                const sineInUser = {
                    sinein: true,
                    name: displayName,
                    email: email,
                    uid: uid,


                }

                setLoginUser(sineInUser);




            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


    }


    // const fbprovider = new FacebookAuthProvider();
    // const fbhandle = () => {

    //     const auth = getAuth(app);
    //     signInWithPopup(auth, fbprovider)
    //         .then((result) => {
    //             // The signed-in user info.
    //             const user = result.user;
    //             console.log(user);


    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             const credential = FacebookAuthProvider.credentialFromResult(result);
    //             const accessToken = credential.accessToken;

    //             // ...
    //         })
    //         .catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.email;
    //             // The AuthCredential type that was used.
    //             const credential = FacebookAuthProvider.credentialFromError(error);

    //             // ...
    //         });

    // }













    return (

        <div className='form'>


            <Form >
                <input type="text" />


                {user ? <Button variant="primary" type="submit" onClick={submit} >
                    Sine In
                </Button> : <Button variant="primary" type="submit" onClick={submit} >
                    Sine Up
                </Button>}
            </Form>
            <form className='log'>

                <Button variant="outline-primary" onClick={handler}><AiFillGoogleCircle></AiFillGoogleCircle> Google Sine In</Button>
                <Button variant="outline-primary" className='bt'><BsFacebook></BsFacebook> Facebook Sine In</Button>

            </form>
            <div className='new-user'>
                <p onClick={() => setuser(!user)}>New User Sine In?</p>
            </div>
            {loginUser.error ? <p style={{ color: 'red' }}>*Email Id already use</p> : ''}
            {loginUser.sucess && <p style={{ color: 'green' }}>*User {user ? 'create' : 'login'} Sucessful</p>}
            {pass ? <p style={{ color: 'red' }}>*Wrong password</p> : ''}
        </div>

    )
}

export default Login;
