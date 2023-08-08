import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";

function App() {
  return (
    <div>
      <Header />
      {/* <Login /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default App;
