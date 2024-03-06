import React from 'react'
import './footer.css'
import author from '../Writing/Author.jpg'
function Footer() {
  return (
    <div className='container mt-5 footer'>
        <hr></hr>
        <div className="row">
            <div className="col-6">
            <h4>About Me</h4>
            <img src={author} alt="" />
            <p className='para3'>Lorem ipsum dolor sit amet, consetetur<br></br> sadipscing elitr, sed diam nonumy eirmod<br></br> tempor invidunt ut labore et dolore magna<br></br> aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="col-6">
                <h4>Recent Comments</h4>
                <div>
                    <p className='para3'>John Doe on Modern Flat With Touch Of<br></br>  Creativity and Gray Patterned Walls</p>
                </div>
                <div>
                    <p className='para3'>John Doe on Modern Flat With Touch Of<br></br>  Creativity and Gray Patterned Walls</p>
                </div>
                <dv>
                    <p className='para3'>John Doe on Modern Flat With Touch Of<br></br>  Creativity and Gray Patterned Walls</p>
                </dv>
                <div>
                    <p className='para3'>ahmad on Cheerful Loving Couple Bakers<br></br>  Drinking Coffee</p>
                </div>
                <div>
                    <p className='para3'>ahmad on Cheerful Loving Couple Bakers<br></br>  Drinking Coffee</p>
                </div>
            </div>
        </div>
        <hr className=''></hr>
        <div>
        © 2015 Writing Designs, INC. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer