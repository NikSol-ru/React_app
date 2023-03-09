import './App.css';
import Profile from './components/Main/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Main/Dialogs/Dialogs';
import Music from './components/Main/Music/Music';
import News from './components/Main/News/News';
import Setting from './components/Main/Setting/Setting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className='wrapper_content'>
          <Routes>
            <Route path='/profile' element={<Profile postsData={props.state.postsPage.postsData} />} />
            <Route path='/dialogs/*' element={<Dialogs
              dialogsData={props.state.dialogsPage.dialogsData}
              messagesData={props.state.dialogsPage.messagesData} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
