import './resources/styles.css'

import {Header} from './components/header_footer/Header.tsx'

function App() {

    return (
        <div className={'App'}>
            <Header/>

            <div style={{backgroundColor: "purple", height: '800px'}}></div>
            <div style={{backgroundColor: "green", height: '800px'}}></div>
            <div style={{backgroundColor: "blue", height: '800px'}}></div>
            <div style={{backgroundColor: "gold", height: '800px'}}></div>
        </div>
    )
}

export default App
