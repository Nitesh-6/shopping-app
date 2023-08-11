import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";
import SignUpForm from "../../components/sing-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Welcome to the sign in page!</h1>
      <button onClick={logGoogleUser}>Sign In with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
