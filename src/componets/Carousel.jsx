import React from 'react'
import '../assets/style/components/Carousel.scss'

const Carousel = ({children}) => (
    <React.Fragment>
        <section class="carousel">
            <div class="carousel__container">
                {children}
            </div>
        </section>
    </React.Fragment>
)

export default Carousel