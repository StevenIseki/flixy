import React, { Component } from 'react'

import ExampleCode from '!!../prism-loader?language=javascript!../components/SortableList'
import Code from '../Code'
import SortableList from '../components/SortableList'

let items = ['Red','Green','Blue','Yellow','Black','White','Orange'];

export default class extends Component {

  render() {
    return (
      <div>
        <div style={{margin: '20px 0'}}>
          <span style={{fontSize: '26px', fontStyle: 'italic'}}>Star Modal component</span>
          <br />
          <Code code={`yarn add star-modal\nimport Modal from 'star-modal'`} />
        </div>

        <div style={{margin: '20px 0'}}>
          <SortableList items={items} />
        </div>
        <Code code={ExampleCode} />
      </div>
    )
  }
}
