import '../common/template/dependencias'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

import Routes from './routes'

const component = (props) => {
    return(
        <div className='wrapper'>
            <Header />
            <SideBar />
            <div className='content-wrapper'>
                <Routes />
            </div>
            <Footer />
        </div>
    )
}

export default component