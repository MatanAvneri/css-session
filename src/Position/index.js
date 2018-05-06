import React, { Fragment, Component } from 'react'
import './style.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            relativeParent: true,
            static: {
                x: 0,
                y: 0
            },
            relative: {
                x: 0,
                y: 0
            },
            abosolute: {
                x: 0,
                y: 0
            },
            fixed: {
                x: 400,
                y: 20
            },
            sticky: {
                x: 0,
                y: 0
            }
        }
    }
    position(key) {
        const onChange = (e, dim) => {
            this.setState({
                [key]: {
                    ...this.state[key],
                    [dim]: parseInt(e.target.value, 10)
                }
            })
        }
        return (
            <div>
                x: <input type="number"
                    value={this.state[key].x}
                    onChange={(e) => onChange(e, 'x')} />
                y: <input type="number"
                    value={this.state[key].y}
                    onChange={(e) => onChange(e, 'y')} />
            </div>
        )
    }

    section = (key) => {
        return (
            <Fragment>
                <h1>{key}</h1>
                <div className={key} style={{
                    left: this.state[key].x,
                    top: this.state[key].y
                }}>try to change my position</div>
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    {this.section('sticky')}
                    {this.position('sticky')}
                </div>
                <div>
                    {this.section('static')}
                    {this.position('static')}
                </div>
                <div>
                    {this.section('relative')}
                    {this.position('relative')}
                </div>
                <div>
                    {this.section('fixed')}
                    {this.position('fixed')}
                </div>
                <div style={{ position: this.state.relativeParent ? 'relative' : 'static' }}>
                    {this.section('abosolute')}
                    {this.position('abosolute')}
                    <input type='checkbox' checked={this.state.relativeParent} onChange={(e) => this.setState({
                        relativeParent: e.target.checked
                    })} /> relative parent
                </div>
            </Fragment>
        )
    }
}