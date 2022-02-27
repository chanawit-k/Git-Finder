import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const spinnner = () => <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display:
       'block' }} />
    </Fragment>

export default spinnner