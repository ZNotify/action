const userID = process.env.INPUT_USER_ID
const title = process.env.INPUT_TITLE
const content = process.env.INPUT_CONTENT
const long = process.env.INPUT_LONG
const endpoint = process.env.INPUT_API_ENDPOINT

if (endpoint.startsWith("http://")) {
    throw new Error("Only secure server is allowed.")
}

const https = require('https');

let url = `${endpoint}/${userID}/send?`

if (title !== '') {
    url += `title=${title}&`
}

if (content !== '') {
    url += `content=${content}&`
}

if (long !== '') {
    url += `long=${long}&`
}

url = url.substring(0, url.length - 1)

process.stdout.write(`Request ${url}\n`)

const req = https.get(url, (res => {
    console.log(`Status: ${res.statusCode}`)
    if (res.statusCode !== 200) {
        throw new Error('Request Failed')
    }

    res.on('data', d => {
        process.stdout.write(d)
    })
}))

req.on('error', error => {
    console.error(error)
})

req.end()
