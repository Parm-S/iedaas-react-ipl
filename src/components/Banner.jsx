import React from 'react'
import BANNER_STYLE from '../style/bannerStyle'

function Banner(props) {
    const { teamName } = props
    const bannerImage = BANNER_STYLE();
    return (
        <div className={bannerImage[`${teamName}-banner`]}>
            <div className={bannerImage[`${teamName}-overlay-image`]}>
                <div className={bannerImage[`${teamName}-overlay`]}>
                </div>
            </div>
        </div>
    )
}

export default Banner
