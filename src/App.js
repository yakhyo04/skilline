import './App.scss';
import Box from './Components/Box/Box';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Wrapper from './Components/Wrapper/Wrapper';

function App() {
  return (
    <div>
      <Header/>
      <Box/>
      <Wrapper/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
