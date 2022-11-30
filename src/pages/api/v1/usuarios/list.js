import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('GET' != method)
      res.status(400).json({message: "Method Not Allowed"})

  try {
    const result = await prisma.users.findMany()
    res.status(200).json({data: result})
  } catch (_) {
    res.status(400).json({message: "wrong parameters"})
  }
}
  