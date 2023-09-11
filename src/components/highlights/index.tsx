import {Description} from "./Description.tsx";
import {Discount} from "./Discount.tsx";

export const Highlights = () => {
    return(
        <div className={'highlight_wrapper'}>
            <Description/>
            <Discount/>
        </div>
    )
}