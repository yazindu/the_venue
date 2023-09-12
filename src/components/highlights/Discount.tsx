import {Fade, Slide} from "react-awesome-reveal";
import {useEffect, useState} from "react";
import {MyButton} from "../utils/MyButton.tsx";

export const Discount = () => {
    const end = 30;
    const [start, setStart] = useState(0)
    const percentage = () => {
        if (start < end) {
            setStart(prevState => prevState + 1)
        }
    }

    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(() => {
                setStart(prevState => prevState + 1)
            }, 30)
        }
    },[start])

    return (
        <div className={'center_wrapper'}>
            <div className={'discount_wrapper'}>
                <Fade
                    onVisibilityChange={(inView) => {
                        if (inView) {
                            percentage()
                        }
                    }
                    }
                >
                    <div className={'discount_porcentage'}>
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide direction={'right'}>
                    <div className={'discount_description'}>
                        <h3>Purchase ticket before 20th June</h3>
                        <p>
                            Nam volutpat elit erat, sed gravida felis lacinia eget. In aliquet consectetur scelerisque.
                            Maecenas nec bibendum nunc. Donec mollis metus sed quam ornare, in scelerisque justo auctor.
                            In aliquet leo neque, vitae commodo erat maximus non.
                        </p>
                        <MyButton
                            text={'Purchase tickets'}
                            link={'http://google.com'}
                            size={'small'}
                            style={{
                                background: '#8e8e8e',
                                color: '#ffffff'
                            }}
                        />
                    </div>
                </Slide>
            </div>
        </div>
    )
}