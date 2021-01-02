import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import SideBar from './SideBar'
import {connect} from 'react-redux'
const Main = ({isAuthenticated}) => {
    return (isAuthenticated)?(<div><SideBar/></div>):(<div><Navbar/></div>)
}

Main.propTypes = {
  
}

const mapStateToProps = (state) =>({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Main)
