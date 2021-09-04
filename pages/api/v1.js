// MongoDB CONNECTION
import middleware from 'pages/api/utils/db';
import nextConnect from 'next-connect';
const cors = require('cors');
import Shortener from 'pages/api/model/shortener';

// function initMiddleware(middleware) {
//     return (req, res) =>
//       new Promise((resolve, reject) => {
//         middleware(req, res, (result) => {
//           if (result instanceof Error) {
//             return reject(result)
//           }
//           return resolve(result)
//         })
//       })
//   }
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )
const handler = nextConnect();
handler.use(middleware);
handler.use(cors());
handler.post( "/", async (req, res) => {
  // await cors(req,res)
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

export default handler