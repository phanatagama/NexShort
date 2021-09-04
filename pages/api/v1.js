// MongoDB CONNECTION
function test(req, res) {
    try {
        require('pages/api/utils/db');
        const Book = require('pages/api/model/shortener');
        return res.status(200)
        .json({
            status: 'OK',
            message: 'Berhasil Koneksi mongoDB'
        });
    } catch (error) {
        return res.status(301)
        .json({
            status: 'Gagal koneksi mongoDB',
            message: String(error),
        })
    }
}

// export default function handler(req, res) {
//     res.send('lol');
//     if (req.method ==='POST') {
//         res.send(req.body);
//         Shortener.insertMany(req.body, (error, result) => {
//             if (!error) {
//                 return res.status(201)
//                 .json({
//                     status: 'Created',
//                     message: 'Data has been created',
//                     data: result,
//                 })
//             }
//             return res.status(304)
//             .json({
//                 status: 'Not Modified',
//                 message: 'Failed to created',
//                 data: req.body,
//             })
//         })
//     }
//     if (req.method ==='GET') {
//         return res.status(200)
//         .json({
//             status: 'OK',
//             message: 'Successfully',
//         });
//     }
// }

export default test;