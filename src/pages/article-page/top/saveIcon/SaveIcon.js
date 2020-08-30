import React, { useEffect, useState, Fragment } from 'react'
import IconButton from '../../../../components/buttons/IconButton'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { updateUserInformation } from '../../../../store/actions/index'
import isFavoriteChecker from '../../../../utils/favoriteArticle'

const SaveIcon = (props) => {
    const [isFavorite, setIsFavorite] = useState(null)
    const userData = useSelector(state => state.user.userDetails)
    const params = useParams()
    const dispatch = useDispatch()

    const onClickHandler = (type) => {
        dispatch(updateUserInformation({ [type]: params.id }))
    }

    useEffect(() => {
        setIsFavorite(isFavoriteChecker(userData, params.id))
    }, [params.id, userData])

    return (
        <Fragment>
            {isFavorite ?
                <IconButton onClick={() => onClickHandler('remove')}>
                    <Favorite fontSize='large' />
                </IconButton> :
                <IconButton onClick={() => onClickHandler('add')}>
                    <FavoriteBorder fontSize='large' />
                </IconButton>
            }
        </Fragment>
    )
}

export default SaveIcon