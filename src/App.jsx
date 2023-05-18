import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MuiPhoneNumber from './components/index'

const App = props => {
  return (
    <div>
      <MuiPhoneNumber defaultCountry={'af'} />
    </div>
  )
}

export default App