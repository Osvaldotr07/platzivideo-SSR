import React from 'react'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import '../assets/style/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom'

const Header = props => {
    const { user } = props
    const hasUser = Object.keys(user).length > 0

    return (
        <React.Fragment>
            <header className="header">
                
                <Link to="/">
                    <img className="header__img" src={logo} alt="Platzi Video" />
                </Link>

                <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} /> :
                        <img src={userIcon} alt="" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    <li>
                        <Link to="/">Cuenta</Link>
                    </li>
                    <li>
                        <Link to="/login">Cerrar Sesión</Link>
                    </li>
                </ul>
                </div>
            </header>
        </React.Fragment>
    )
}

const mapStateToProp = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProp, null)(Header)