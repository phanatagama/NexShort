// MongoDB CONNECTION
import middleware from 'pages/api/utils/db';
import nextConnect from 'next-connect';
const cors = require('cors');
import Shortener from 'pages/api/model/shortener';

const handler = nextConnect();
handler.use(middleware);
handler.use(cors());
handler.get("/:url", (req, res) => {
    Shortener.find({path: req.param.url})
    .then(response => location.href(response.url))
    .catch(error => res.status(503).json({message: String(error),}))
})
handler.get("/", (req, res) => {
    return res.status(200)
    .json({
        status: 'OK',
        message: 'Successfully',
    })
})
handler.post( async (req, res) => {
    await Shortener.insertMany(req.body, (error, result) => {
        if (!error) {
            return res.status(201)
            .json({
                status: 'Created',
                message: 'Data has been created',
                data: result,
            })
        }
        return res.status(304)
        .json({
            status: 'Not Modified',
            message: 'Failed to created',
            data: req.body,
        })
    })
})
export default handler