import nextConnect from 'next-connect';
import Home from 'pages/home';

const handler = nextConnect();

handler.get("/", (req,res) => {
    return Home
})
// handler.get("/:path", (req,res) => {
//     return Home
// })

export default handler