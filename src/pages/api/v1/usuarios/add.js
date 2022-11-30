import Usuarios from '@helpers/api/usuarios'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { method, cookies, body } = req

  if('POST' != method)
      res.status(400).json({message: "Method Not Allowed"})

  try {
    const user = await prisma.users.create({data: body})
    res.status(200).json()
  } catch (_) {
    res.status(400).json({message: "wrong parameters"})
  }
}