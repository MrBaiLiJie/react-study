import Login from "./Login";
import logo from "../logo.svg";
const Home = () => {
  return (
    <div className="Home">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
        </header>
      </div>
    </div>
  );
};
export default Home;
