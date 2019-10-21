const apiUrl = url => {
    return '/v1' + url;
}

const makeResponse = (res, message, data = [], status = 200) => {
    return res.json({
        success: true,
        version: 'v1',
        status,
        message,
        data
    })
}

const makeError = (res, message = '', status = 400, data = []) => {
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

