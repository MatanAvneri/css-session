import React, { Fragment } from 'react'
import './style.css'

const ATTRIBUTE = { test_attr: 'test' }
const CLASS_NAME = 'test-class'
const IMPORTANT_CLASS_NAME = 'important-test-class'
const ID = 'testId'

export default function Specificity() {
    return (
        <Fragment>
            <h1>Specificity</h1>
            <div>I'm a text</div>
            <div {...ATTRIBUTE}>I'm a text</div>
            <div className={CLASS_NAME} {...ATTRIBUTE}>I'm a text</div>
            <div id={ID} className={CLASS_NAME} {...ATTRIBUTE}>I'm a text</div>
            <div id={ID} className={CLASS_NAME} {...ATTRIBUTE} style={{ color: 'purple' }}>I'm a text</div>
            <div id={ID} className={`${CLASS_NAME} ${IMPORTANT_CLASS_NAME}`} {...ATTRIBUTE} style={{ color: 'purple' }}>I'm a text</div>
            <div id={ID} className={`${CLASS_NAME} ${IMPORTANT_CLASS_NAME}`} {...ATTRIBUTE}
                ref={(el) => {
                    if (el) {
                        el.style.setProperty('color', 'blue', 'important');
                    }
                }}>I'm a text</div>
            <br />
            <br />
            <br />
            <br />
            <a href="https://specificity.keegan.st/" target="_blank" rel="noopener noreferrer">https://specificity.keegan.st</a>
        </Fragment>
    )
}