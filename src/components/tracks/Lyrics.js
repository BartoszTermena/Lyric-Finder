import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Moment from  'react-moment';
import { connect } from 'react-redux';
import { trackActions } from '../store/actions/trackActions';


class Lyrics extends Component {

    state = {
        track: {},
        lyrics: {},
    }
 
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KEY}`)
        .then(res => {
            this.setState({lyrics: res.data.message.body.lyrics});
            return axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KEY}`);
            
        }).then(res => {
            this.setState({track: res.data.message.body.track});
        })
        .catch(err => console.log(err))
    }

    handleClick = (e) => {
        this.props.trackActions(e)
    }
  render() {
      const { track, lyrics } = this.state;
   if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
    return <Spinner />
   } else {
       return (
        <React.Fragment>
            <Link to ="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
            <div className="card">
                <h5 className="card-header">
                    <strong>{track.track_name}</strong> by {' '} {track.artist_name} {' | '}
                    <Link to ="/favorite">
                    <button className="btn btn-warning btn-sm float-right" onClick={() => this.handleClick(track)}>Vote for this track! </button>
                   </Link>
                </h5>
               <div className="card-body">
               <p className="card-text">{lyrics.lyrics_body}</p>
               </div>
            </div>
            
            <ul className="list-group mt-3">
                <li className="list-group-item">
                <strong>Song Genre</strong>:{' '}
                    {track.primary_genres.music_genre_list.length !== 0
                        ? track.primary_genres.music_genre_list[0].music_genre
                            .music_genre_name
                        : 'N/A'}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{' '}
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
            </li>
            </ul>
            
        </React.Fragment>
       );
    }
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        trackActions: (track) => dispatch(trackActions(track))
    }
}

export default connect(null, mapDispatchToProps)(Lyrics);