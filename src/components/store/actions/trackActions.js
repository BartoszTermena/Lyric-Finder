export const trackActions = (track) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('tracks').add({
        trackName: track.track_name,
        trackId: track.track_id,
        artistName: track.artist_name
      }).then(() => {
        dispatch({ type: "ADD_TRACK", track });
      }).catch((err) => {
        dispatch({ type: "ADD_TRACK_ERROR", err });
      })
  }
};