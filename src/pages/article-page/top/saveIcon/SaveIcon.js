import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartUnfilled } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { updateUserInformation } from '../../../../store/actions/index'
import isFavoriteChecker from '../../../../utils/favoriteArticle'

const SaveIcon = (props) => {
    const [isFavorite, setIsFavorite] = useState(null)
    const userId = useSelector(state => state.auth.id)
    const userData = useSelector(state => state.user.userDetails)
    const params = useParams()
    const dispatch = useDispatch()

    const onClickHandler = (type) => {
        dispatch(updateUserInformation(userId, { [type]: params.id }))
    }

    useEffect(() => {
        setIsFavorite(isFavoriteChecker(userData, params.id))
    }, [params.id, userData])

    return (
        <div>
            {isFavorite ?
                <Button onClick={() => onClickHandler('remove')}><FontAwesomeIcon icon={faHeart} size="3x" /></Button> :
                <Button onClick={() => onClickHandler('add')}><FontAwesomeIcon icon={faHeartUnfilled} size="3x" /></Button>
            }
        </div>
    )
}

const Button = styled.button`
    background-color: transparent;
    border: none;
    animation: none;
    outline: none;
    color: #c23616;

    &:hover {
        cursor: pointer;
    }

    &:active {
        border: none;
        animation: none;
        outline: none;
    }
`

export default SaveIcon