const Login = (props) => {
  const {
    user,
    email,
    setemail,
    password,
    setpassword,
    handleLogin,
    handleSignUp,
  } = props;

  return (
    <div>
      <form>
        <label data="email&pass">Email</label> <br />
        <input
          type="email"
          id="email"
          placeholder="enter email"
          autoFocus
          data="email"
          required
          className="w-50"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <label>password</label> <br />
        <input
          type="password"
          id="password"
          data="pass"
          className="w-50"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="enter password"
        />
      </form>
      <div>
        {!user.authenticated && (
          <>
            <button onClick={handleLogin} data="sign-in-button">
              Sign In
            </button>
            <p>
              Dont have an account?
              <button
                className="btn btn-primary text-white w-auto"
                onClick={handleSignUp}
              >
                sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
