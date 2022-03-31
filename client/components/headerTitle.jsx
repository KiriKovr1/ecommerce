import React from 'react'

import { Link } from 'react-router-dom'

const HeaderTitle = () => {
    return (
        <Link to='/'>
            <div className='header__titleAndDescription'>
                <h2 className='header__title'>
                    <span >
                        <span className='title__My'>
                            My
                        </span>
                        <span className='title__Store'>
                            Store
                        </span>
                    </span>
                </h2>
                <p className='header__Description'>useful food store</p>
            </div>
        </ Link>
    )
}

export default HeaderTitle