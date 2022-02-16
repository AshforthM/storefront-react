import {Route, Routes} from 'react-router-dom';

import {Button} from './ui/buttons'
import {HiDotsVertical} from 'react-icons/hi'
import {LoginPage, DashBoardPage, PageNotFound} from './pages';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path="dashboard" element={<DashBoardPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  );
}

export default App;