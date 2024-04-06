import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar webTitle = 'TextCraft' />
      <TextForm />
    </>
  );
}

export default App;
