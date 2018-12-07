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
    }
    return state
}
export default trackReducer