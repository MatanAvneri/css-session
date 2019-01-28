import React, { Component, Fragment } from 'react'
import './style.css'

const FLEX_DIRECTIONS = ['column', 'row']

export default class Display extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flexDirection: FLEX_DIRECTIONS[0],
      inline: {
        height: 0,
        width: 0,
        dimensions: false
      },
      inlineBlock: {
        height: 40,
        width: 200,
        dimensions: false
      },
      block: {
        height: 40,
        width: 330,
        dimensions: false
      }
    }
  }

  dimensions (key, disabled) {
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
        width: <input type="number"
                      value={ this.state[key].width }
                      disabled={ disabled }
                      onChange={ (e) => onChange(e, 'width') }/>
        height: <input type="number"
                       value={ this.state[key].height }
                       disabled={ disabled }
                       onChange={ (e) => onChange(e, 'height') }/>
      </div>
    )

  }

  section (key, children) {
    const isDimension = this.state[key].dimensions
    const style = {
      background: '#44ca67',
      width: isDimension ? this.state[key].width : undefined,
      height: isDimension ? this.state[key].height : undefined
    }
    return (
      <div style={ {
        display: 'flex',
        flexDirection: this.state.flexDirection
      } }>
        <h1>{ key }</h1>
        <div>
          { React.cloneElement(children, { style }) }
          { this.dimensions(key) }
          <input type='checkbox'
                 checked={ isDimension }
                 onChange={ (e) => this.setState({
                   [key]: {
                     ...this.state[key],
                     dimensions: e.target.checked
                   }
                 }) }/>
          Get Input Dimensions
        </div>
      </div>
    )
  }

  render () {
    return (
      <Fragment>
        <div className='display-grid'>
          { this.section('inline', <span>try to change my dimensions</span>) }
          { this.section('inlineBlock', <button>try to change my dimensions</button>) }
          { this.section('block', <div>try to change my dimensions</div>) }
          <div>
            <h1>none</h1>
            <div style={ { display: 'none' } }>pick a boo</div>
            <div style={ { visibility: 'hidden' } }>pick a boo</div>
          </div>
        </div>
        <div>
          <br/>
          <br/>
          <br/>
          <div>
            Flex is { this.state.flexDirection }.
            <button
              onClick={ () => this.setState({ flexDirection: FLEX_DIRECTIONS[1 - FLEX_DIRECTIONS.indexOf(this.state.flexDirection)] }) }>Toggle</button>
          </div>
          <br/>
          <br/>
          Further Reading:
          <br/>
          Flex Froggy - <a target='_blank' rel="noopener noreferrer"
                           href='https://flexboxfroggy.com/'>https://flexboxfroggy.com/</a>
          <br/>
          Css Grid - <a target='_blank' rel="noopener noreferrer"
                        href='https://learncssgrid.com/'>https://learncssgrid.com/</a>
        </div>
      </Fragment>
    )
  }
}