import {HashRouter} from 'react-router-dom';
import { MyRutes } from './Routes';
import { useAppSelector } from './store/store';
import { Loading } from './components/Loading';

export function App(){
    const loadingUser = useAppSelector(state=>state.user.loading);
    if(loadingUser) return <Loading/>
    return(
        <HashRouter>
            <MyRutes/>
        </HashRouter>
    );
}