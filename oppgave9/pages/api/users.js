// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    username: "John Doe",
    email: "johndoe@mail.com",
    password: "123"
  },
  {
    username: "Jane Doe",
    email: "janedoe@mail.com",
    password: "321"
  }
]

export default function handler(req, res) {
  //if(req.methode === "GET") {
    res.status(200).json({ success: true, data: users })
  //}
}
