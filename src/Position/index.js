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
                    [dim]: parseInt(e.target.value)
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

    render() {
        return (
            <Fragment>
                <div>
                    <h1>sticky</h1>
                    <div className='sticky' style={{
                        left: this.state.sticky.x,
                        top: this.state.sticky.y
                    }}>try to change my position</div>
                    {this.position('sticky')}
                </div>
                <div>
                    <h1>static</h1>
                    <div className='static' style={{
                        left: this.state.static.x,
                        top: this.state.static.y
                    }}>try to change my position</div>
                    {this.position('static')}
                </div>
                <div>
                    <h1>relative</h1>
                    <div className='relative' style={{
                        left: this.state.relative.x,
                        top: this.state.relative.y
                    }}>try to change my position</div>
                    {this.position('relative')}
                </div>
                <div style={{ position: this.state.relativeParent ? 'relative' : 'static' }}>
                    <h1>abosolute</h1>
                    <div className='abosolute' style={{
                        left: this.state.abosolute.x,
                        top: this.state.abosolute.y
                    }}>try to change my position</div>
                    {this.position('abosolute')}
                    <input type='checkbox' checked={this.state.relativeParent} onChange={(e) => this.setState({
                        relativeParent: e.target.checked
                    })} /> relative parent
                </div>
            </Fragment>
        )
    }
}