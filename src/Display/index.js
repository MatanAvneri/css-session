import React, { Fragment, Component } from 'react'


export default class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inline: {
                height: 0,
                width: 0
            },
            inlineBlock: {
                height: 40,
                width: 200
            },
            block: {
                height: 40,
                width: 330
            }
        }
    }

    dimensions(key) {
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
                width: <input type="number"
                    value={this.state[key].width}
                    onChange={(e) => onChange(e, 'width')} />
                height: <input type="number"
                    value={this.state[key].height}
                    onChange={(e) => onChange(e, 'height')} />
            </div>
        )

    }

    section(key) {
        return (
            <div>
                <h1>{key}</h1>
                <span style={{ background: 'lavender' ,width: this.state[key].width, height: this.state[key].height }}>try to change my dimensions</span>
                {this.dimensions(key)}
            </div>
        )
    }

    render() {
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridRowGap: '10px', gridColumnGap: '10px' }}>
                {this.section('inline')}
                {this.section('inlineBlock')}
                {this.section('block')}
                <div>
                    <h1>none</h1>
                    <div style={{ display: 'none' }}>pick a boo</div>
                    <div style={{ visibility: 'hidden' }}>pick a boo</div>
                </div>
            </div>
        )
    }
}