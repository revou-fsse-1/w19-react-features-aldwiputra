import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NewCategory from './pages/NewCategory';
import EditCategory from './pages/EditCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add' element={<NewCategory />} />
        <Route path='/edit/:id' element={<EditCategory />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
