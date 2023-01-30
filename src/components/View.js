import { Outlet } from 'react-router-dom';
import Nav from '../ui/Nav';

const View = () => (
  <main>
    <Nav />
    <Outlet />
  </main>
);

export default View;
