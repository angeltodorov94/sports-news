import React from 'react'
import Typography from '../../../components/titles/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const ArticleContent = ({ data }) => {
    const date = new Date(data.createdAt)
    const result = `${date.getMonth()}.${date.getDate()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    return (
        <Container maxWidth='sm'>
            <Typography type='body' text={data.content} />
            <Box component='div' display="flex" justifyContent="space-between">
                <Typography type="caption" text={`Viewed: ${data.clicks} times`} />
                <Typography type="caption" text={`${data.author} | ${result}`} />
            </Box>
        </Container>
    )
}

export default ArticleContent