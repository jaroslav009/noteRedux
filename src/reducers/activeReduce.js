export default function(state="", active) {
    switch (active.type) {
        case 'UPDATE_TEXT':
            return Object.assign({}, state, { text: active.payload })
            break;
    
        default:
            return state
            break;
    }
}