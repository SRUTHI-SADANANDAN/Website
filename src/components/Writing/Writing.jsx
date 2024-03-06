import React from 'react'
import image from '../Writing/couple-bakers.jpg'
import './Writing.css'
import image2 from '../Writing/office.jpg'
function Writing() {
  return (
    <div className='container'>
        <h1 className='writing'>Writing</h1>
        <div className='bakers'>
            <img src={image} alt="couple-bakers" height={400} width={880} />
        </div>
        <div className='mt-3'>
            <h2 className='cheer'>Cheerful Loving Couple Bakers Drinking Coffee</h2>
           <p className='para1'> It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to<br></br> digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving<br></br> with agencies offering similar services — on the surface, at least. Producing creative, fresh projects is the key to standing out.<br></br> Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this<br></br> article looks at …</p>
           <hr className='line'></hr>
        </div>
    </div>
  )
}

export default Writing