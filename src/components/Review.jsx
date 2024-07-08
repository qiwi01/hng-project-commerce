import React from 'react'
import "../css/Review.css"
import manpic from "../images/1.png"
import ladypic from "../images/17.png"
import womanpic from "../images/3d_avatar_25.png"

const Review = () => {
  return (
    <div className='review-body'>
        <div className="rv">
        <h4>Our customers are happy</h4>
         <div className="rv-container">
                <div className="rv-content1">
                    <img src={manpic} alt="" />
                    <p>The coffee keeps me refreshsed and active all day since i added it to my morning routine. its gives a smooth taste, my husband loves it aswell.</p>
                    <h6>Judith Eben <span> 4.9</span></h6>
                </div>
                <div className="rv-content2">
                    <img src={ladypic} alt="" />
                    <p>The coffee keeps me refreshsed and active all day since i added it to my morning routine. its gives a smooth taste, my husband loves it aswell.</p>
                    <h6>Judith Eben <span> 4.9</span></h6>

                </div>
                <div className="rv-content3">
                    <img src={womanpic} alt="" />
                    <p>The coffee keeps me refreshsed and active all day since i added it to my morning routine. its gives a smooth taste, my husband loves it aswell.</p>
                    <h6>Judith Eben <span> 4.9</span></h6>

                </div>
            </div>
        </div>
            

    </div>
  )
}

export default Review