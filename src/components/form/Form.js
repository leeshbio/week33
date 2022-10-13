import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { createTodos } from '../../redux/modules/todoList'

const Form = () => {
    //제목과 내용을 리덕스에 저장하는 폼 컴포넌트
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const addContents = () => {
        const sendData = {
            title: title,
            content: content
        }

        dispatch(createTodos(sendData))
    }
    //addcontents는 디스패치를 하기 위해서 만든 함수입니다.
    //액션함수에 액션값을 가지고 디스패치합니다.
    return (
        <Wrap>
            <h4>제목</h4>
            <input type="text" onChange={(e) => { setTitle(e.target.value) }} />
            {/* 온체인지: 인풋값에 모든 것을 감지하는 기능 */}
            <h4>내용</h4>
            <input type="text" onChange={(e) => { setContent(e.target.value) }} />
            <button onClick={addContents}>추가하기</button>
        </Wrap>
    )
}

export default Form;

const Wrap = styled.div`
width: 90%;
height: 100px;
margin: 0 auto;
display: flex;
justify-content: space-around;
align-items: center;
background-color: coral;
opacity: 0.7;
color: white;
margin-top: 10px;
border-radius: 5px;
`