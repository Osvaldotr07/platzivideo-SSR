import React from 'react'
import { connect } from 'react-redux'
import '../assets/style/Home.scss'
import Search from '../componets/Search'
import Category from '../componets/Category'
import Carousel from '../componets/Carousel'
import CarouselItem from '../componets/CarouselItem'

import useInitialState from '../Hooks/useInitialState'

// const API = 'http://localhost:3000/initalState'

const Home = ({myList, trends, originals}) => {
    // const initialState = useInitialState(API)
    return (
        <React.Fragment>
            <Search />
            {myList?.length > 0 && 
                <Category title="Mi lista">
                    <Carousel>
                    {myList?.map(item => 
                        <CarouselItem 
                        key={item.id} 
                        {...item}
                        isList />
                    )}
                    </Carousel>
                </Category>
            }
            
            <Category title="Trends de platzi video">
                <Carousel>
                {trends?.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Category>
            <Category title="Originals de platzi video">
                <Carousel>
                {originals?.map(item => 
                    <CarouselItem key={item.id} {...item}/>
                )}
                </Carousel>
            </Category>
        </React.Fragment>
    )}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
    
}
export default connect(mapStateToProps, null)(Home)