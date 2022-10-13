import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { readTodos } from "../redux/modules/todoList"
import styled from "styled-components"
import React from "react"

const Detail = () => {
    const param = useParams()
    const dispatch = useDispatch()

    const todoList = useSelector(state => state.todoList.todo)
    console.log(todoList)

    useEffect(() => { dispatch(readTodos(param.id)) }, [dispatch, param.id])
    console.log(param)

    return (
        <Wrap>
            <InnerWrap>
                <Div>
                    <div>ID:{todoList[0]?.id}</div>
                </Div>
                <div>{todoList[0]?.title}</div>
                <div>{todoList[0]?.content}</div>
                {/* 옵셔널 체이닝 - map 사용시 유용 맵에 값이 없어서  비동기 공부*/}
                <span>상세보기</span>
            </InnerWrap>
        </Wrap>
    )

}

export default Detail;

const Wrap = styled.div`
width: 400px;
height: 300px;
border: 3px solid orange;
text-align: center;
display: flex;
  align-items: center;
  justify-content: center;
`

const InnerWrap = styled.div`
    justify-content: center;

`
const Div = styled.div`
width: 90%;

display: flex;
justify-content: space-between;
`






