import './styles/w3.css';
import './App.css';
import Navbar from './comments/navbar/index.jsx'
import Page from './comments/page/index.jsx'
import Header from './comments/header/index.jsx'
import Footer from './comments/footer/index.jsx'
function App() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <Header />
      {/* Page content */}
      <Page />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
