import React from 'react'
import "./Banner.css";
import  Slider  from 'infinite-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function Banner() {
    return (
        <div className="banner">
            <h2>Banner</h2>
            <Slider className="slider__image" autoplay={true} autoplaySpeed={5000} duration={500} prevArrow={<ArrowBackIosIcon />} nextArrow={<ArrowForwardIosIcon />}>
                
                <img className="banner__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5676._CB404165680_.jpg" alt=""/>
                <img className="banner__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-YTVlMmNiZTgt-w1500._CB418667451_.jpg" alt=""/>
                <img className="banner__image" src="https://images-na.ssl-images-amazon.com/images/G/01/prime/HOL20_P1_GWH5/HOL_V2/GW/V2/primeholiday_gw_dt_tallhero_1500x600_holiday_engaged_en_v2._CB403512586_.jpg" alt=""/>
                <img className="banner__image" src="https://images-na.ssl-images-amazon.com/images/G/01/prime/HOL20_P1_GWH5/HOL_V2/GW/V2/primeholiday_gw_dt_tallhero_1500x600_holiday_engaged_en_v2._CB403512586_.jpg" alt=""/>
                <img className="banner__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/trafficdrivers/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V1A_1500x600._CB403130896_.jpg" alt=""/>


            </Slider>
        </div>
    )
}

export default Banner

