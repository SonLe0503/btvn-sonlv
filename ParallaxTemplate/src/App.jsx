import "./App.css";
import "./styles/css.css";
import "./styles/w3.css";
import "./styles/me.css";
import Navbar from "./components/navbar/index.jsx";
import First from "./components/first/index.jsx";
import Second from "./components/second/index.jsx";
import Third from "./components/third/index.jsx";
import Footer from "./components/footer/index.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <>
    <Navbar />
    <First />
    <Second />
    <Third />
    <Footer />
    </>
  );
}

export default App;
