const isArticleFavorite = (userData, articleId) => {
    let check = false

    userData.savedArticles.forEach(article => {
        if (article._id === articleId || article === articleId)
            check = true
    })

    return check
}

export default isArticleFavorite