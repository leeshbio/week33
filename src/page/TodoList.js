import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import List from '../components/list/List'
import Form from '../components/form/Form'
import { useSelector } from 'react-redux'

function TodoList() {
    const todoList = useSelector(state => state.todoList)
    return (
        <div>
            <Layout>
                <Header />
                <Form />
                <List listData={todoList} />
            </Layout>
        </div>
    )
}

export default TodoList;