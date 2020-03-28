import React, { useEffect, useState } from 'react'
import Header from '../componets/Header'
import '../assets/style/Home.scss'
import Search from '../componets/Search'
import Category from '../componets/Category'
import Carousel from '../componets/Carousel'
import CarouselItem from '../componets/CarouselItem'
import Footer from '../componets/Footer'
import useInitialState from '../Hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const Home = () => {
    const initialState = useInitialState(API)
    return (
        <React.Fragment>
            <Search />
            {initialState.mylist?.length > 0 && 
                <Category title="Mi lista">
                    <Carousel>
                    {initialState.mylist?.map(item => 
                        <CarouselItem key={item.id} {...item} />
                    )}
                    </Carousel>
                </Category>
            }
            
            <Category title="Trends de platzi video">
                <Carousel>
                {initialState.trends?.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Category>
            <Category title="Originals de platzi video">
                <Carousel>
                {initialState.originals?.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Category>
        </React.Fragment>
    )}

export default Home