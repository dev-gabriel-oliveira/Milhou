import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Calculator from '../pages/calculator';
import NotFounded from '../pages/not_founded';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='*' element={<NotFounded/>}/>
            <Route path='' element={<Home/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
    )
};
