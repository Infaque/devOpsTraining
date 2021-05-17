import SignInWithGoogle from "../signIn-SignUp/SignInWithGoogle"
import SignInWithEmail from "../signIn-SignUp/SignInWithEmail"

const LoginHeader = () => {

    return(
        <div className="ui form">
            <h2>Sign In with Google</h2> <br />
            <SignInWithGoogle />
            <SignInWithEmail />
            
        </div>
    )


}
export default LoginHeader