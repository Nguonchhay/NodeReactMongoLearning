const apiUrl = url => {
    return '/v1' + url;
}

const makeResponse = (res, message, status = 200, data = []) => {
    return res.json({
        success: true,
        version: 'v1',
        status,
        message,
        data
    })
}

const makeError = (res, status = 400, message = '', data = []) => {
    return res.json({
        success: false,
        version: 'v1',
        status,
        message,
        data
    })
}

module.exports = {
    apiUrl,
    makeResponse,
    makeError
}

