import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../assets/style/Home.scss'
import Search from '../componets/Search'
import Category from '../componets/Category'
import Carousel from '../componets/Carousel'
import CarouselItem from '../componets/CarouselItem'

import useInitialState from '../Hooks/useInitialState'

// const API = 'http://localhost:3000/initalState'

const Home = ({myList, trends, originals, searched}) => {
    // const initialState = useInitialState(API)
    return (
        <>
            <Search isHome/>
            {searched?.length > 0 && 
                <Category title="Coincidencias en la busqueda">
                    <Carousel>
                    {searched?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                    )}
                    </Carousel>
                </Category>
            }
            
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
        </>
    )}

Home.propTypes = {
    myList: PropTypes.array,
    trends: PropTypes.array,
    originals: PropTypes.array,
    searched: PropTypes.array

}

const mapStateToProps = state => {
    return {
        searched: state.searched,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
    
}
export default connect(mapStateToProps, null)(Home)