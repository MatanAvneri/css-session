import React, { Component } from 'react'

export default class BadStyle extends Component {
    componentDidMount() {
        // Grab the first sheet, regardless of media
        const sheet = document.styleSheets[0];
        sheet.addRule("*", "color: lightcoral !important;", 1);
    }
    render() {
        return (
            <h1>Bad Style</h1>
        )
    }
}