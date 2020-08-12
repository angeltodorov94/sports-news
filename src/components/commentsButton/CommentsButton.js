import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Container from './styled'

const CommentsButton = ({ toggle, onClick }) => {
    return (
        <Container onClick={onClick} toggle={toggle}>
            <h2>COMMENTS</h2>
            {toggle ? <FontAwesomeIcon icon={faChevronUp} size="2x" />
                : <FontAwesomeIcon icon={faChevronDown} size="2x" />}
        </Container>
    )
}

export default CommentsButton