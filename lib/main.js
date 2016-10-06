import React from 'react'
import { Link } from 'react-router'
import Preview from './Preview'

export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="list__header">Contacts</h1>
          <div>
              <Preview/>
          </div>
      </main>
    )
  }
})
