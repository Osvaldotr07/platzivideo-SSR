import React from 'react'
import Header from '../componets/Header'
import '../assets/style/App.scss'
import Search from '../componets/Search'
import Category from '../componets/Category'
import Carousel from '../componets/Carousel'
import CarouselItem from '../componets/CarouselItem'
import Footer from '../componets/Footer'

const App = () => (
    <React.Fragment>
        <Header />
        <Search />
        <Category title="Mi lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Category>
        <Category title="Originales de platzi video">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Category>
        <Footer />
    </React.Fragment>
)

export default App