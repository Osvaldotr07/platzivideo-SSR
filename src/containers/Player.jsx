import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import '../assets/style/components/Player.scss'
import NotFound from '../containers/NotFound'
import PropTypes from 'prop-types'

const Player = (props) => {
    const { id } = props.match.params
    var hasPlaying = Object.keys(props.playing).length > 0

    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <>
            <div className="Player">
                <video controls autoPlay>
                    <source src={props.playing.source} type="video/mp4" />
                </video>
                <div className="Player-back">
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
                </div>
            </div>
        </>
    ) : <NotFound />
}


Player.propTypes = {
    hasPlaying: PropTypes.object
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)