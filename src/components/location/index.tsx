export const Location = () => {
    return (
        <div className={'location_wrapper'}>
            <iframe
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4107778417388!2d80.5708402736197!3d5.937981694046439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae139a54b4f517f%3A0xedaacfe94b23041a!2sRabindranath%20Tagore%20Memorial%20Auditorium%2C!5e0!3m2!1sen!2slk!4v1694700841861!5m2!1sen!2slk'}
                width={'100%'}
                height={'500px'}
                style={{border: '0px'}}
                title={'gglemaps'}
                allowFullScreen={true}
                loading={'lazy'}
            ></iframe>
            <div className={'location_tag'}>
                <div>Location</div>
            </div>
        </div>
    )
}