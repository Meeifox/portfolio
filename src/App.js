import './App.scss';
import { Fab } from '@mui/material';
import NavigationIcon from '@mui/icons-material/KeyboardArrowUp';
import { animateScroll as scroll } from 'react-scroll';
import Header from "./components/header/Header.js"
import Home from "./pages/home/Home.js"
import Footer from "./components/footer/Footer";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="App">
      <Header></Header>
      <Home></Home><Fab className="fab" onClick={scrollToTop} variant='extended'>
      <NavigationIcon sx={{ mr: 1 }} />
      Remonter
      </Fab>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
