import {Slide} from "react-awesome-reveal";
import {useCallback, useEffect, useState} from "react";

export const TimeUntil = () => {

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const renderItem = (time: number, tag: string) => (
        <div className={'countdown_item'}>
            <div className={'countdown_time'}>
                {time}
            </div>
            <div className={'countdown_tag'}>
                {tag}
            </div>
        </div>
    )

    const getTimeUntil = useCallback((deadline: string) => {
        const time = Date.parse(deadline) - Date.parse(new Date().toString())
        if (time < 0) {
            console.log('date passed')
        } else {
            const seconds = Math.floor((time / 1000) % (60))
            const minutes = Math.floor((time / 1000 / 60) % (60))
            const hours = Math.floor((time / (1000 * 60 * 60)) % (24))
            const days = Math.floor((time / (1000 * 60 * 60 * 24)))
            console.log(seconds, minutes, hours, days)
            setTime({seconds, minutes, hours, days})
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => getTimeUntil('Nov, 20, 2023, 01:20:00'), 1000)
        return () => clearInterval(intervalId);
    }, [])

    return (
        <Slide direction={'left'} delay={1000}>
            <div className={'countdown_wrapper'}>
                <div className={'countdown_top'}>
                    Event starts in
                </div>
                <div className={'countdown_bottom'}>
                    {renderItem(time.days, 'Day(s)')}
                    {renderItem(time.hours, 'Hour(s)')}
                    {renderItem(time.minutes, 'Minute(s)')}
                    {renderItem(time.seconds, 'Second(s)')}
                </div>
            </div>
        </Slide>
    )
}