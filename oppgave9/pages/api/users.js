// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = []

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body

    if(!data?.name || !data?.email || !data?.password)
      res.status(400).json({ success: false, error: "Fill in empty fields", data: data })
    else {
      const newUser = {
        id: (users.length + 1),
        name: data.name,
        email: data.email,
        password: data.password
      }

      users.push(newUser)
      res.status(201).json({ success: true, data: users })
    }
  } else {
    const data = req.body;

    if (data?.id) {
      const user = users.filter(user => {
        return user.id = data.id;
      })
      
      res.status(200).json({ success: true, data: user })
    } else 
      res.status(200).json({ success: true, data: users })
  }
}
