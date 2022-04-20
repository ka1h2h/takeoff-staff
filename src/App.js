import './App.css';
import Registration from './Pages/Registration/Registration';
import Authorization from './Pages/Authorization/Authorization';
import UsersPage from './Pages/UsersListPage/UsersPage'
import UserData from './Pages/UserDataPage/UserData';
import UserEditDataPage from './Pages/UserEditPage/UserEditDataPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/profiles" element={<UsersPage />} />
        <Route path="/profiles/:id" element={<UserData />} />
        <Route path="/profiles/:id/:edit" element={<UserEditDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
