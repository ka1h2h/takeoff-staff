import './App.css';
import Registration from './Registration/Registration';
import Authorization from './Autorization/Autorization';
import User from './UsersList/User'
import UserData from './UserDataPage/UserData';
import EditUserData from './UserDataPage/EditUserDataPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {







  return (
    <BrowserRouter>

      <Routes >
        <Route path="/" element={<Registration />} />
        <Route path="/autorization" element={<Authorization />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserData />} />
        <Route path="/users/:id/:edit" element={<EditUserData />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
