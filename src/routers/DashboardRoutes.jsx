import { Routes, Route } from 'react-router-dom';

import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { Marvel } from '../components/marvel/Marvel';
import { SearchScreen } from '../components/search/SearchScreen';

import { Navbar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<Marvel />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='hero/:heroId' element={<HeroScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='/' element={<Marvel />} />
        </Routes>
      </div>
    </>
  );
};
