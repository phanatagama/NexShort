// MongoDB CONNECTION
import middleware from 'pages/api/utils/db';
// import mongoose from 'mongoose';
import nextConnect from 'next-connect';

// const connectDB = handler => async (req, res) => {
//     if (mongoose.connections[0].readyState) {
//       // Use current db connection
//       return handler(req, res);
//     }
//     // Use new db connection
//     await mongoose.connect("mongodb+srv://heroku:123@cluster0.bw65i.mongodb.net/shortLink?retryWrites=true&w=majority", {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });
//     return handler(req, res);
//   };

// function test(req, res) {
//     // console.log('loh');
//     try {
//         // require('pages/api/utils/db');
//         const Shortener = require('pages/api/model/shortener');
//         return res.status(200)
//         .json({
//             status: 'OK',
//             message: 'Berhasil Koneksi mongoDB'
//         });
//     } catch (error) {
//         return res.status(301)
//         .json({
//             status: 'Gagal koneksi mongoDB',
//             message: String(error),
//         })
//     }
// }

const handler = nextConnect();
handler.use(middleware);
handler.get( async (req, res) =>{
    if (req.method ==='POST') {
        res.send(req.body);
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
    }
    if (req.method ==='GET') {
        return res.status(200)
        .json({
            status: 'OK',
            message: 'Successfully',
        });
    }
})
export default handler