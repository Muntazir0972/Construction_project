import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const about = () => {
    return (
        <section className = 'section-2 py-5' >
            <div className='container'>
                <div className='row'>

                    <div className='col-md-6'>
                        <img src={AboutImg} className='w-100' />
                    </div>

                    <div className='col-md-6'>
                        <span>about us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>Building enduring structures requires a comprehensive approach that combines advanced materials ,resilent design, routine maintenance ,and sustainable practices. by drawing on historical insights and utilizing modern technology</p>
                        <p>Designing structures that stand the test of time involvesa seamless blend of cutting -edge materials, durable design, ongoing upkeep, and eco-friendly practices, By comibining lessons from the past with the power of modern technology.</p>
                    </div>

                </div>

            </div>
              </section >   

  )
}

export default about