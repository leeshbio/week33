import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Todo from "../todo/Todo"


const List = () => {
    const todoList = useSelector(state => state.todoList.list)
    //state.모듈명

    return (
        <Wrap>
            <h4>working..</h4>
            <Innerwrap>
                {todoList.map((item) => (
                    <>
                        {item.isDone ? ("") : (
                            <Todo listData={item} />
                        )}
                    </>
                ))}
            </Innerwrap>
            <h4>done~!</h4>
            <Innerwrap>
                {todoList.map((item) => (
                    <>
                        {item.isDone ? (
                            <Todo listData={item} />
                        ) : ("")}
                    </>
                ))}
            </Innerwrap>
        </Wrap>



    )
}

export default List;

const Wrap = styled.div`
width: 90%;
margin: 0 auto;
`
const Innerwrap = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
flex-direction: row;
`


