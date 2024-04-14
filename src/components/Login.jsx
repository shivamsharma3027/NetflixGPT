import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const email = useRef(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  let dataValidate = null;
  const dispatch = useDispatch();
  const handleButtonclick = () => {
    //checking validation
    const data = checkValidData(email.current.value, password.current.value);
    setErrorMessage(data ? `❌` + data : "");

    if (data) return;

    //signin signup means user input right values
    if (!isSignIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("user sign in succes");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img 
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="  bg-black bg-opacity-70 backdrop-blur-sm rounded absolute my-36 mx-auto right-0 left-0 w-3/12  p-12   text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className=" border-solid border-[1px] border-white bg-inherit rounded p-4 my-4 w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="  border-solid border-[1px] border-white bg-inherit rounded p-4 my-4 w-full"
          type="text"
          placeholder="Email Address"
          ref={email}
        />

        <input
          className=" border-solid border-[1px] border-white bg-inherit rounded p-4 my-4 w-full"
          type="password"
          placeholder="Password"
          ref={password}
        />

        <p className="text-red-600 text-[25px] font-semibold">{errorMessage}</p>
        <button
          onClick={handleButtonclick}
          className="block p-4 my-6 w-full rounded bg-red-700 "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="m-4 text-zinc-500 text-1xl">
          {" "}
          {isSignIn ? "New to NetFlix?" : "Already registered?"}
          <b onClick={toggleSignInForm} className="text-white cursor-pointer">
            {isSignIn ? " Sign Up Now" : " Sign In Now"}
          </b>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
