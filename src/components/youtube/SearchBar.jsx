import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: 'UCnLdHOuue5i1O7TsH6oh07w'
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler (e) {
    this.setState({ term: e.target.value })
  }

  submitHandler (e) {
    e.preventDefault()
    this.props.handleFormSubmit(this.state.term)
  }

  render () {
    return (
      <nav className='SearchBar' style={{ marginBottom: '25px' }}>
        <div className='nav-wrapper'>
          <form onSubmit={this.submitHandler}>
            <div className='input-field'>
              <input onChange={this.changeHandler} name='term' id='search' type='search' placeholder='Digite o nome ou ID do canal, ex: UCnLdHOuue5i1O7TsH6oh07w' value={this.state.term} required/>
              <label className='label-icon' htmlFor='search'><i className='material-icons'>search</i></label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

export default SearchBar
