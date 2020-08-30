import React from 'react'
import Typography from '../../../components/typography/Typography'
import { Container, Box } from '@material-ui/core'

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