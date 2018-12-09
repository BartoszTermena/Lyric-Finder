import React from 'react'

const TrackSummary = ({track}) => {
  return (
    <div>
       <div className="card">
                <h5 className="card-header">
                    <strong>{track.trackName}</strong> by: {' '} {track.artistName}  <strong><span className="text-warning float-right">{' | '} Votes: {track.count}</span></strong>
                </h5>
            </div>
    </div>
  )
}
export default TrackSummary