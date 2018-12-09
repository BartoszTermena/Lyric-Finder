const initState = {
    userTracks: [
        {id: '1', title: 'Hotel California'},
        {id: '2', title: 'Thunderstuck'}
    ]
}

const trackReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TRACK': 
            console.log('add track', action.track)
            return state;
        case 'ADD_TRACK_ERROR':
            console.log('ADD_TRACK_ERROR', action.error)
            return state;
        default: 
            return state;
    }
}
export default trackReducer