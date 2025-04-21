import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../__fire-base";

const GoogleAthor = () => {

    const provider = new GoogleAuthProvider();


    const hendleGoogleAthor = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='flex items-center w-1/2 btn mx-auto mt-20'>
            <button  onClick={() => hendleGoogleAthor()}>Click Here For Google</button>
        </div>
    );
};

export default GoogleAthor;