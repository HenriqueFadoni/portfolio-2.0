import React from 'react';

import videoMP4 from '../../../img/Love-Coding.mp4'
import videoWEBM from '../../../img/Love-Coding.webm'

const BgVideo = () => (
    <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={videoMP4} type="video/mp4" />
            <source src={videoWEBM} type="video/webm" />
            Your browser is not supported!
        </video>
    </div>
);

export default BgVideo;