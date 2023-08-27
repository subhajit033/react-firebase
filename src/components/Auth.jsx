import { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const handleAuth = async (e) => {
    e.preventDefault();
    //most of the firebase feature application deals with promises that's why we are using async await
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      setAlertMsg("Authentication Sucessfull");
    } catch (err) {
      setAlertMsg(err);
    }
  };
  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setAlertMsg("Authentication Sucessfull");
    } catch (err) {
      setAlertMsg(err);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setAlertMsg("Logout sucessfully");
  };
  useEffect(() => {
    if (alertMsg) {
      alert(alertMsg);
    }
    const timer = setTimeout(() => {
      setAlertMsg("");
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [alertMsg]);
  return (
    <>
      <div className="my-8">
        <form
          onSubmit={handleAuth}
          className="flex flex-col items-center gap-3"
        >
          <input
            className="border-2 border-black p-1 w-72 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email.."
            value={email}
          />
          <input
            className="border-2 border-black p-1 w-72 rounded-md"
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password..."
            value={pass}
          />
          <div className="flex items-center gap-4">
            <button
              className="bg-blue-500 px-1.5 py-1 rounded-md"
              type="submit"
            >
              Sign in
            </button>
            <i
              onClick={singInWithGoogle}
              className="fa-brands fa-google text-2xl cursor-pointer"
            ></i>
          </div>
        </form>
      </div>
      {auth?.currentUser && (
        <button
          onClick={handleSignOut}
          className="absolute right-44 top-5 bg-red-400 px-2 py-1.5 rounded-md text-white z-10"
        >
          Sign Out
        </button>
      )}
      {/* user information */}
      {auth?.currentUser && (
        <div className="absolute right-5 top-5">
          <div className="flex flex-col items-center">
            <img
              className="w-12 rounded-full"
              src={auth?.currentUser?.photoURL}
              alt="user"
            />
            <p>{auth?.currentUser?.displayName}</p>
            <p>{auth?.currentUser?.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
