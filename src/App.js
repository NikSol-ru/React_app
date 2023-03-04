import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="wrapper">
      <Header className="header"></Header>
      <Nav className="nav"></Nav>
      <Profile className="content"></Profile>
    </div>
  );
}

export default App;
