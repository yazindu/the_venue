import './resources/styles.css'

import {Header} from './components/header_footer/Header.tsx'
import {Footer} from "./components/header_footer/Footer.tsx";
import {Featured} from "./components/featured";

function App() {

    return (
        <div className={'App'}>
            <Header/>
            <>
                <Featured/>
            </>
            <div style={{backgroundColor: "purple", height: '800px'}}></div>
            <div style={{backgroundColor: "green", height: '800px'}}></div>
            <div style={{backgroundColor: "blue", height: '800px'}}></div>
            <div style={{backgroundColor: "gold", height: '800px'}}></div>
            <Footer/>
        </div>
    )
}

export default App
