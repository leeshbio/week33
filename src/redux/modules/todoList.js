const CREATE_TODO = 'CREATE_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const READ_TODO = "READ_TODO"


export const createTodos = (sendData) => {
    //createTodos는 액션개체를 생성해서 리듀서로 보내는 기능을 하는 함수.
    return {
        type: CREATE_TODO,
        sendData
    }
}

export const deleteTodos = (id) => {
    return {
        type: DELETE_TODO,
        id
    }

}



export const completeTodos = (data) => {
    return {
        type: COMPLETE_TODO,
        data
    }
}

export const readTodos = (id) => {
    return {
        type: READ_TODO,
        id
    }
}




const initialState = {
    list: [{
        id: 1,
        title: "리액트",
        content: "공부하기",
        isDone: false,
    },
    {
        id: 2,
        title: "해외여행가기",
        content: "동유럽",
        isDone: false,
    }
    ],
    todo: {}
}

//밑에 있는게 리듀서
const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODO": {
            return {
                ...state,
                list: [
                    ...state.list, {
                        id: state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1,
                        title: action.sendData.title,
                        content: action.sendData.content,
                        isDone: false
                    }
                ]
            }
        }

        case "READ_TODO": {
            console.log(action.id)
            return {
                ...state,
                todo: state.list.filter((item) => {
                    return item.id === Number(action.id);
                }),
            };
            // const list = state.list.filter((item) => {
            //     if (item.id === Number(action.id)) return item
            // })
            // return { ...state, todo: list };
        }

        case "DELETE_TODO": {
            console.log(action)
            const filterArray = state.list.filter((item) => {
                return item.id !== action.id
            })
            return { ...state, list: filterArray }
        }

        case "COMPLETE_TODO": {
            console.log(action.data.id)

            const filterArray = state.list.map((item) => {
                if (item.id === action.data.id) {
                    //제가 틀린 부분은 action.data.id를 data의 경로를 적어주지 못했다
                    return action.data.isDone ? { ...item, isDone: false } : { ...item, isDone: true }
                    //이부분도 data라는 경로를 적지 않고 경로를 설정을 잘못했다
                } else return item
            })
            console.log(filterArray)
            return { ...state, list: filterArray }
        }


        default:
            return state;
    }
};

export default todoList;