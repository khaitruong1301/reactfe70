


const stateDefault = {
    arrTask: [
        {taskName:'làm fronend',status:false}
    ]
}


export const toDoListReducer = (state=stateDefault,action) => {

    switch(action.type){
        case 'GET_ALL_TASK': {
            state.arrTask = action.arrTask;
            return {...state};
        }
        default : return state;
    }

} 







//HOF:  higher order function

function main (callback) {



    return function () {
        callback();

    }
}

//HOC: higher order component

