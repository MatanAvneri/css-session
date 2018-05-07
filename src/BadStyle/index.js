import React, { Component } from 'react'

export default class BadStyle extends Component {
    componentDidMount () {
        require('./style.css')
    }
    render() {
        return (
            <h1>Bad Style</h1>
        )
    }
}