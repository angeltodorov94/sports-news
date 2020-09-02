import React from 'react'
import Typography from '../../../components/typography/Typography'
import { Container, Box } from '@material-ui/core'

const ArticleContent = ({ content, createdAt, author, clicks }) => {
    const date = new Date(createdAt)
    const result = `${date.getMonth()}.${date.getDate()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    return (
        <Container maxWidth='sm'>
            <Typography type='body' text={content} />
            <Box component='div' display="flex" justifyContent="space-between">
                <Typography type="caption" text={`Viewed: ${clicks} times`} />
                <Typography type="caption" text={`${author} | ${result}`} />
            </Box>
        </Container>
    )
}

export default ArticleContent