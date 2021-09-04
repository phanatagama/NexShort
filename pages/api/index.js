// MongoDB CONNECTION
require('./utils/db');
const Shortener = require('./model/shortener');

export default function handler(req, res) {
    if (req.method ==='POST') {
        Shortener.insertMany(req.body, (error, result) => {
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
    }
}