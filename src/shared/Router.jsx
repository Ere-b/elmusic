import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from '../pages/Chart/Chart';
import Album from '../pages/Album/Album';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
