import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Music from './components/Main/Music/Music';
import News from './components/Main/News/News';
import UsersContainer from './components/Main/Users/UsersContainer';
import Setting from './components/Main/Setting/Setting';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';
import ProfileContainer from './components/Main/Profile/ProfileContainer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className='wrapper_content'>
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
