import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';
import View from './View';

const RouteFile = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<View />}>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default RouteFile;
