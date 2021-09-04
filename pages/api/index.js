// MongoDB CONNECTION
require('./utils/db');
const Shortener = require('./model/shortener');

export default function handler(req, res) {
    if (req.method ==='POST') {
        res.send(req.body);
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
    if (req.method ==='GET') {
        return res.status(200)
        .json({
            status: 'OK',
            message: 'Successfully',
        });
    }
}