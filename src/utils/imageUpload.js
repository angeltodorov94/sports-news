const imageUpload = async files => {
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'sports-news')

    const promise = await fetch('https://api.cloudinary.com/v1_1/achicha94/image/upload', {
        method: "POST",
        body: data
    })

    const response = await promise.json()
    return response.public_id
}

export default imageUpload