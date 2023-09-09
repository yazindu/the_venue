import {Carrousel} from "./Carrousel.tsx";
import {TimeUntil} from "./TimeUntil.tsx";

export const Featured = () => {
    return(
        <div className={'featured_container'}>
            <Carrousel/>
            <div className={'artist_name'}>
                <div className={'wrapper'}>
                    Ariana Grande
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}