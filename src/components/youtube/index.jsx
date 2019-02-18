import React, { Component } from 'react'

import youtube from '../../service/youtube'

import SearchBar from './SearchBar'
import VideosList from './VideosList'
import VideoDetail from './VideoDetail'
import AppHeader from './Header'
import Spinner from './Spinner'

class Youtube extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      channel: null,
      videos: [],
      video: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    this.escFunction = this.escFunction.bind(this)
  }

  componentDidMount () {
    this.handleSubmit(`UCnLdHOuue5i1O7TsH6oh07w`)
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  async handleSubmit (term) {
    // await youtube.searchVideos(term)
    //   .then(res => this.setState({ videos: res.data.items }))
    this.setState({ videos: [] })
    this.setState({ isLoading: true })
    await youtube
      .searchChannel(term)
        .then(res => {
          const { items } = res.data
          if (items.length > 0) {
            const { uploads } = res.data.items[0].contentDetails.relatedPlaylists
            return youtube.getPlaylist(uploads)
              .then(r => {
                console.log(r.data)
                this.setState({ videos: r.data.items })
              })
          }
        })
        .finally(() => this.setState({ isLoading: false }))
  }

  handleVideo (video) {
    this.setState({ video })
  }

  escFunction (event){
    if(event.keyCode === 27) {
      this.handleVideo(null)
    }
  }

  render () {
    let loadingSpinner = <span/>

    if (this.state.isLoading) {
      loadingSpinner = (<Spinner/>)
    }

    return (
      <div className='container'>
        <AppHeader title={`Youtube Channel Search`}/>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        {loadingSpinner}
        <VideosList handleVideo={this.handleVideo} videos={this.state.videos} isLoading={this.state.isLoading}/>
        <VideoDetail handleVideo={this.handleVideo} video={this.state.video}/>
      </div>
    )
  }
}

export default Youtube
