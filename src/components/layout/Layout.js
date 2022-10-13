import styled from 'styled-components'

const Layout = (props) => {
    return (
        <Wrap>{props.children}</Wrap>
    )
}

export default Layout;

const Wrap = styled.div`

`