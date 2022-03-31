import React from 'react'

import Head from '../head'
import Store from './mainPageComponents/store'
import Header from '../header'

const MainPage = () => {
    return (
        <div>
           <Head  title='store'/> 
           <Header />
           <Store />  
        </div>
    )
}

MainPage.propTypes = {}

export default MainPage