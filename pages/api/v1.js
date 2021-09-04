// MongoDB CONNECTION
import middleware from 'pages/api/utils/db';
import nextConnect from 'next-connect';

const handler = nextConnect();
handler.use(middleware);
handler.get( (req, res) => {
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