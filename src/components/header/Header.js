import styled from 'styled-components'

const Header = () => {
    return (
        <Wrap>
            <h1>MY TO DO LIST</h1>
        </Wrap>
    )
}

export default Header;

const Wrap = styled.div`
width: 90%;
height: 50px;
margin: 0 auto;
text-align: center;
line-height: 50px;
background-color: coral;
color: white;
border-radius: 5px;
`

