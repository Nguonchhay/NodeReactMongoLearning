const OAuthClient = require('../database/models/OAuthClient')
const ApiUtil = require('./../utils/apiUtil')


const listClient = async (req, res) => {
    const oauthClients = await OAuthClient.find({})

    return ApiUtil.makeResponse(
        res,
        'OAuth Client list',
        [oauthClients]
    )
}

const storeClient = (req, res) => {
    const clientData = {
        ...req.body,
        userId: req.user._id
    }

    console.log(req.user);
    console.log(clientData);

    OAuthClient.create(clientData, (err, result) => {
        if (err) {
            return ApiUtil.makeError(
                res,
                'Something went wrong',
                400,
                userData
            )
        }

        return ApiUtil.makeResponse(
            res,
            'OAuth Client was saved successfully',
            [result]
        )
    })
}

module.exports = {
    listClient,
    storeClient
}