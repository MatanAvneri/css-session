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

    render() {
        return (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridRowGap: '10px', gridColumnGap: '10px'}}>
                <div>
                    <h1>inline</h1>
                    <span style={{ width: this.state.inline.width, height: this.state.inline.height }}>try to change my dimensions</span>
                    {this.dimensions('inline')}
                </div>
                <div>
                    <h1>inline-block</h1>
                    <button style={{ width: this.state.inlineBlock.width, height: this.state.inlineBlock.height }}>try to change my dimensions</button>
                    {this.dimensions('inlineBlock')}
                </div>
                <div>
                    <h1>block</h1>
                    <div style={{ width: this.state.block.width, height: this.state.block.height }}>try to change my dimensions</div>
                    {this.dimensions('block')}
                </div>
                <div>
                    <h1>none</h1>
                    <div style={{ display: 'none' }}>try to change my dimensions</div>
                    <div style={{ visibility: 'hidden' }}>try to change my dimensions</div>
                </div>
            </div>
        )
    }
}