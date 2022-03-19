
const stateDefaut = {
    arrContent : [
        {name:'Trường', content:'hello, hello !'},
        {name:'Khải', content:'hello, hello !'},
    ]
}


export const FakeBookAppReducer = (state = stateDefaut,action) => {

    switch(action.type) {
        case 'COMMENT': {
            state.arrContent = [...state.arrContent,action.userComment];
            return {...state};
        }
        default: return state;
    }

}