import Usuarios from '@helpers/api/usuarios'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
  const { method, cookies, query: { codigo } } = req

  if('DELETE' != method)
      res.status(400).json({message: "Method Not Allowed"})

  try {
    const deleteUser = await prisma.users.delete({
      where: {
        email: codigo,
      },
    })
    res.status(200).json()
  } catch (_) {
    res.status(400).json({message: "wrong parameters"})
  }
}