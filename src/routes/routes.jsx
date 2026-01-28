import { Routes, Route } from 'react-router-dom';
import App from '../components/App.jsx';
import CircleOne from '../components/CircleOne';
import CircleTwo from '../components/CircleTwo.jsx';
import CircleThree from '../components/CircleThree.jsx';
import CircleFour from '../components/CircleFour.jsx';
import CircleFive from '../components/CircleFive.jsx';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/page1' element={<CircleOne />}/>
            <Route path='/page2' element={<CircleTwo />}/>
            <Route path='/page3' element={<CircleThree />}/>
            <Route path='/page4' element={<CircleFour />}/>
            <Route path='/page5' element={<CircleFive />}/>
        </Routes>
    );
}