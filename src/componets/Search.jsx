import React from 'react'
import { connect } from 'react-redux'
import ProtoTypes from 'prop-types'
import { searchRequest } from '../actions'
import classNames from 'classnames'
import '../assets/style/components/Search.scss'


const Search = ({isHome, searchRequest}) => {
    const inputStyle = classNames('input', {
        isHome
    }) 

    const handleInput = event => {
        const searching = event.target.value
        searchRequest(searching)
    }


    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input 
                type="text" 
                className={inputStyle} 
                placeholder="Buscar..." 
                onChange={handleInput}
            />
        </section>
    )
}

Search.propTypes = {
    isHome: ProtoTypes.bool,
    searchRequest: ProtoTypes.func,
    searching: ProtoTypes.string
}

const mapDispatchToProps = {
    searchRequest,
}

export default connect(null, mapDispatchToProps)(Search)