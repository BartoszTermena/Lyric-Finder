import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import TrackSummary from './TrackSummary';
import _ from 'underscore';

 class User extends Component {
  render() {
    const {tracks} = this.props;
    const grouped = _.groupBy(tracks,'trackName');
    const mappedArr = [];
    _.map(grouped,function(val,key){
    mappedArr.push({
        count: val.length,
        ...val[0]
    })
    });
    return (
      <div>
          {tracks && mappedArr.sort((a, b) => b.count - a.count).map(track => {
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
        tracks: state.firestore.ordered.tracks
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'tracks' }
    ])
  )(User)