import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="container flex-col">

      <div className="menus flex-row flex-wrap">

        <div className="main-button s1">
          <i className="fas fa-house-user"></i>
          <h1>HOME</h1>
        </div>

        <div className="main-button s2">
        <i className="fas fa-suitcase"></i>
          <h1>PORTAFOLIO</h1>
        </div>
        <div className="main-button s3">
        <i className="far fa-file-alt"></i>
          <h1>RESUME</h1>
        </div>
        <div className="main-button s4">
        <i className="fab fa-linkedin"></i>
          <h1>LINKEDIN</h1>
        </div>
        <div className="main-button s5">
        <i className="fab fa-github"></i>
          <h1>GITHUB</h1>
        </div>
        <div className="main-button s6">
        <i className="far fa-address-book"></i>
          <h1>CONTACT</h1>
        </div>

      </div>
     

    </div>
    </>
  );
}

export default App;
