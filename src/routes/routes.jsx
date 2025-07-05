import { Routes, Route } from 'react-router-dom';
import App from '../components/App.jsx';
import CircleOne from '../components/CircleOne';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/page1' element={<CircleOne />}/>
        </Routes>
    );
}