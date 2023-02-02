import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MissionsList from './missions/MissionList';
import MyProfileLists from './myProfile/MyProfileLists';
import RocketsList from './rockets/RocketsList';
import View from './View';

const RouteFile = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<View />}>
        <Route index element={<RocketsList />} />
        <Route path="/missions" element={<MissionsList />} />
        <Route path="/myProfile" element={<MyProfileLists />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default RouteFile;
