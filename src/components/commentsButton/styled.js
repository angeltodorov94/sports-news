import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 25px 0;
    color: ${props => props.toggle ? 'silver' : '#273c75'};
    user-select: none;
    
    &:hover {
        cursor: pointer;
    }

    h2 {
        margin: 0;
    }
`

export default Container