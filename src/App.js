import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Nav></Nav>
      <Profile></Profile>
    </div>
  );
}

export default App;
