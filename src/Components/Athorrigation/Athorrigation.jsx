import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../../__authorization__";

const Athorrigation = () => {

    //for google
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    //for google 
    const handleGoogleAthor = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {console.log("user ->", result)})
        .then((error) => {console.log("Error ->", error)})
    };

    //for github 
    const handleGithubleAthor = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {console.log("user ->", result)})
        .then((error) => {console.log("Error ->", error)})
    };

    //for Twiter
    const handleTwiterAthor = () => {
        console.log('twiter is coming')
    }

    //for Facebook
    const handleFacebookAthor = () => {
        console.log('Facebook is coming')
    }

    return (
        <div className=" flex flex-col md:flex-row justify-center items-center h-screen">
            <button className=" border border-t-red-200 m-5 p-5 rounded-2xl hover:bg-amber-200 hover:text-black" onClick={() => handleGoogleAthor()}>Click Google Athor</button>
            <button className=" border border-t-red-200 m-5 p-5 rounded-2xl hover:bg-amber-200 hover:text-black" onClick={() => handleGithubleAthor()}>Click Github Athor</button>
            <button className=" border border-t-red-200 m-5 p-5 rounded-2xl hover:bg-amber-200 hover:text-black" onClick={() => handleTwiterAthor()}>Click Twiter Athor</button>
            <button className=" border border-t-red-200 m-5 p-5 rounded-2xl hover:bg-amber-200 hover:text-black" onClick={() => handleFacebookAthor()}>Click Facebook Athor</button>
        </div>
    );
};

export default Athorrigation;