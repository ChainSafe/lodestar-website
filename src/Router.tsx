import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
