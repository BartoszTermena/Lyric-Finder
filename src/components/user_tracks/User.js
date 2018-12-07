import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrackSummary from './TrackSummary'

 class User extends Component {
  render() {
    const {tracks} = this.props
    return (
      <div>
          {tracks && tracks.map(track => {
              return (
                 <TrackSummary track={track} key={track.id} />
              )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.track.userTracks
    }
}

export default connect(mapStateToProps)(User)