import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: { name: 'John', email: 'john@example.com' },
  })

  const users = await prisma.user.findMany()
  console.log(users)

  await prisma.user.delete({ where: { id: user.id } })
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })