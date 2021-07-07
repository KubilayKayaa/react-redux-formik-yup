import signUpImage from "./assets/signup-image.svg";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-md-5 ">
          <SignUp />
        </div>
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <img src={signUpImage} alt="signup" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default App;
