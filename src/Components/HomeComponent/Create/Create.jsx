import React from 'react'
import './Create.css'
const Create = () => {
  return (
    <div className="create-and-sell-your">
    <div className="rectangle" />
        <div className="content">
            <div className="title">
                <p className="div">
                <span className="text-wrapper">Create And Sell NFTs</span>
                </p>
                <p className="p">
                    Start exploring the world of digital art and NFTs today and take control of your digital assets with
                    confidence!
                </p>
            </div>
            <div className="CTA">
                <button className="create-now-wrapper" variant="outline-secondary" id="button-addon1">
                    <div className="create-now">Create Now</div>
                </button>
                <button className="create-now-wrapper2" variant="outline-secondary" id="button-addon2">
                    <div className="text-wrapper-2">Learn More</div>
                </button>
            </div>
        </div>
        <div className="group">
            <div className="overlap-group">
                <img className="img" alt="Rectangle" src="/images/Create/image02.png" />
                <img className="rectangle-2" alt="Rectangle" src="/images/Create/image01.png" />
            </div>
        </div>
    <div className="rectangle-3" />
    </div>  
    )
}

export default Create
