import {Zoom} from "react-awesome-reveal";
import {MyButton} from "../utils/MyButton.tsx";

export const Pricing = () => {
    const pricesState = {
        prices: [100, 150, 200],
        position: ['Floor', 'Balcony', 'Space'],
        desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a dignissim justo, quis volutpat ligula.', 'Phasellus consequat ut nisl ac ultrices. Fusce sodales non mi eu cursus. Morbi ligula quam, rhoncus at justo non, varius ultricies mi.', 'Proin ut faucibus dui. Integer commodo turpis et nunc aliquet maximus. Aenean a faucibus felis, at suscipit enim.'],
        linkTo: ['http://sales.b', 'http://sales.m', 'http://sales.s'],
        delay: [500, 0, 500]
    }

    const showBoxes = () => (
        pricesState.prices.map((_, index) => (
            <Zoom key={index + Date()} className={'pricing_item'} delay={pricesState.delay[index]}>
                <div className={'pricing_inner_wrapper'}>
                    <div className={'pricing_title'}>
                        <span>${pricesState.prices[index]}</span>
                        <span>{pricesState.position[index]}</span>
                    </div>
                    <div className={'pricing_description'}>
                        {pricesState.desc[index]}
                    </div>
                    <div className={'pricing_buttons'}>
                        <MyButton text={'Purchase'} link={pricesState.linkTo[index]} size={'large'} iconTicket={true}/>
                    </div>
                </div>
            </Zoom>
        ))
    )


    return (
        <div className={'bck_black'}>
            <div className={'center_wrapper pricing_section'}>
                <h2>Pricing</h2>
                <div className={'pricing_wrapper'}>
                    {showBoxes()}
                </div>

            </div>
        </div>
    )
}