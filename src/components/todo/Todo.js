import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodos } from "../../redux/modules/todoList";
import { completeTodos } from "../../redux/modules/todoList";

const Todo = ({ listData }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // 객체 리터럴 = dispatch, navigate 함수를 변수에 담아 써서 객체를 만드는 것


    const deleteDataHandler = (id) => {
        return dispatch(deleteTodos(id))


    }

    const completeHandler = (data) => {
        return dispatch(completeTodos(data))

    }



    return (
        <Wrap>
            <ListBox>
                <div style={{ margin: '0 auto' }}>
                    <p>{listData.title}</p>
                    <p>{listData.content}</p>
                    <button onClick={() => deleteDataHandler(listData.id)}>삭제</button>
                    <button onClick={() => completeHandler(listData)}> {listData.isDone ? "취소" : "완료"} </button>
                    <button onClick={() => { navigate(`/detail/${listData.id}`) }}>상세보기</button>
                </div>
            </ListBox>
        </Wrap >
    )
}

export default Todo;

const Wrap = styled.div`
margin: 0 auto;
display: flex;
`

const ListBox = styled.div`
border: 2px solid orange;
width: 200px;
height: 150px;
margin-top: 20px;
display: flex;
border-radius: 5px;
text-align: center;
`

