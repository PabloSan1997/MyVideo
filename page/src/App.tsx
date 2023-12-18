import {HashRouter} from 'react-router-dom';
import { MyRutes } from './Routes';

export function App(){
    return(
        <HashRouter>
            <MyRutes/>
        </HashRouter>
    );
}