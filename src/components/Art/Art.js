import React from "react";
import './Art.css';
import stat1 from '../../images/stat1.svg';
import stat2 from '../../images/stat2.svg';
import stat3 from '../../images/stat3.svg';
import circleEth from '../../images/ethcircle.svg';
import ends from '../../images/ends.png';
import background from '../../images/background.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import logo from '../../images/logo.png';

function Art() {
    
    return (
        <section className="art">
            <div className="art__groupText">
                <h2 className="art__title">
                    Discover, and collect Digital Art  NFTs 
                </h2>
                <p className="art__text">
                    Digital marketplace for crypto 
                    collectibles and non-fungible tokens 
                    NFTs. Buy, Sell, and discover exclusive 
                    digital assets.
                </p>
                <button className="art__button">
                    Explore Now
                </button>
                <div className="art__groupStatistics">
                    <img className="art__statistics" src={stat1}/>
                    <img className="art__statistics" src={stat2}/>
                    <img className="art__statistics" src={stat3}/>
                </div>
            </div>
            <div className="art__groupImg">
                <div className="art__mainImg">
                    <img className="art__background" src={background}/>
                    <h3 className="art__subtitle">
                        Abstr Gradient NFT
                    </h3>
                    <div className="art__user">
                        <img className="art__userImg" src={logo}/>
                        <p className="art__userName">
                            Arkhan17
                        </p>
                    </div>
                    <img className="art__endTime" src={ends}/>
                </div>
                <img className="art__img" src={circleEth}/>
                <img className="art__img" src={img1}/>
                <img className="art__img" src={img2}/>
            </div>
        </section>
    );
}
export default Art;