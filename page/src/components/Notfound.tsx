import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { Header } from './Header';

export function NotFound() {
    const initialState: UserInitialState = {
        url_image: '',
        name: '',
        token: '',
        loading: false
    }
    return (
        <>
        <Header {...initialState}/>
            <p
                className="text-rojoVideos-950 font-bold m-auto my-9 w-fit text-7xl"
            >
                Not Found
            </p>
            <div
            className='flex justify-center'
            >
                <WrenchScrewdriverIcon
                className='w-20 text-rojoVideos-900'
                />
                <span
                className='text-7xl ml-2 text-rojoVideos-900'
                >404</span>
            </div>
        </>
    );
}