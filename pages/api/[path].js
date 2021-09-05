import middleware from 'pages/api/utils/db';
import nextConnect from 'next-connect';
const cors = require('cors');
import Shortener from 'pages/api/model/shortener';

const handler = nextConnect({ attachParams: true });
handler.use(middleware);
handler.use(cors({methods: ['GET', 'POST', 'OPTIONS'],}));
handler.post("/api/v1", async (req, res) => {
    await Shortener.insertMany(req.body, (error, result) => {
        if (!error) {
            return res.status(200)
            .json({
                status: 'Created',
                message: 'Data has been created',
                data: result
            });
        }
        return res.status(304)
        .json({
            status: 'Not Modified',
            message: 'Failed to created',
            data: req.body
        });
    })
  })
  
handler.get('/api/v1', (req, res) => {
    return res.status(200)
    .json({
        status: 'OK',
        message: 'Successfully',
    })
})
handler.get("/api/:path", async (req, res) => {
    await Shortener.findOne({path: req.params.path})
    .then(response => res.redirect(response.url))
    .catch(error => res.status(503).json({message: String(error),}))
})

export default handler
