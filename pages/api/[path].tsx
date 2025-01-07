import middleware from './utils/db';
import nextConnect from 'next-connect';
const cors = require('cors');
// import Shortener from 'pages/api/model/shortener';
const Shortener = require('./model/shortener');
import { NextApiRequest, NextApiResponse } from 'next';


const handler = nextConnect({ attachParams: true });
handler.use(middleware);
handler.use(cors({methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],}));

handler.post("/api/v1", async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
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
handler.delete(
  "/api/v1/:id",
  async (req: NextApiRequest, res: NextApiResponse) => {
    await Shortener.deleteOne({ _id: req.query.id })
      .then((result) => {
        if (result.deletedCount > 0) {
          return res.status(200).json({
            status: "Delete",
            message: "Data has been deleted",
          });
        }
        return res.status(304).json({
          status: "Not Modified",
          message: "Failed to delete",
        });
      })
      .catch((error) => {
        return res.status(503).json({
          status: "Not Modified",
          message: "Failed to delete",
        });
      });
  }
);
// handler.get("/api/v1/:path", async (req, res) => {
//     console.log(`path: ${req.params.path}`)
//     try {
//         const response = await Shortener.findOne({ path: req.params.path })
//         // return res.redirect(response.url)
//         if (!response) {
//             notFound()
//         }
//         return res.status(200).json(response)
//     } catch (error) {
//         return res.status(404)
//             .json({
//                 status: 'NOT FOUND',
//                 message: 'URL not valid'
//             })
//     }
// }) 
// handler.get('/api/v1', (req, res) => {
//     console.log(`path v1: ${req.params.path}`)
//     return res.status(200)
//     .json({
//         status: 'OK',
//         message: 'Successfully',
//     })
// })


export default handler
