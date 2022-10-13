import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "../page/Detail"
import TodoList from "../page/TodoList"
//path에 연결된 컴포넌트를 임포트한다.
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes는 Route들의 묶음 */}
                <Route path="/" element={<TodoList />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;