import './App.css';
// import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Profile/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <Nav></Nav>
      <div className='wrapper_content'>
        {/* <Profile></Profile> */}
        <Dialogs></Dialogs>
      </div>
    </div>
  );
}

export default App;
