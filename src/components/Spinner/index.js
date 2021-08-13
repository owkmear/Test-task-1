import React from 'react'
import { BeatLoader } from 'react-spinners'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  render() {
    return <BeatLoader color={'#337ab7'} loading={this.state.loading} />
  }
}

export default Spinner
