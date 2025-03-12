import {Routes, Route } from 'react-router-dom';

import { CreateMovie } from '../pages/CreateMovie/CreateMovie'
import { Home } from '../pages/Home/Home'
import { Movie } from '../pages/Movie/Movie'
import { Profile } from '../pages/Profile/Profile'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/new" element={<CreateMovie />} />
        </Routes>
    )
}

