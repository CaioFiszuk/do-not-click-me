import { Routes, Route } from 'react-router-dom';
import App from '../components/App.jsx';
import CircleOne from '../components/CircleOne';
import CircleTwo from '../components/CircleTwo.jsx';
import CircleThree from '../components/CircleThree.jsx';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/page1' element={<CircleOne />}/>
            <Route path='/page2' element={<CircleTwo />}/>
            <Route path='/page3' element={<CircleThree />}/>
        </Routes>
    );
}