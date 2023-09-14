import './resources/styles.css'

import {Header} from './components/header_footer/Header.tsx'
import {Footer} from "./components/header_footer/Footer.tsx";
import {Featured} from "./components/featured";
import {VenueInfo} from "./components/venueInfo";
import {Highlights} from "./components/highlights";
import {Pricing} from "./components/pricing";
import {Location} from "./components/location";

function App() {

    return (
        <div className={'App'}>
            <Header/>
            <>
                <Featured/>
            </>
            <>
                <VenueInfo/>
            </>
            <>
                <Highlights/>
            </>
            <>
                <Pricing/>
            </>
            <>
                <Location/>
            </>
            <Footer/>
        </div>
    )
}

export default App
