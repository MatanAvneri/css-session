import React, { Fragment } from 'react'
import './style.css'

export default function Zindex() {
    return (
        <Fragment>
            <h1>Z Index</h1>
            <div className='z-parent'>
                parent
                <div className='z-child1'>
                    child1
                </div>
                <div className='z-child2'>
                    child2
                </div>
            </div>
            <div className='z-brother'>brother</div>
        </Fragment>
    )
}