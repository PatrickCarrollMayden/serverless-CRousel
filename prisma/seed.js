import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

async function seed () {
  await Promise.all(
    getTurtles().map(user => {
      return db.user.create({ data: user })
    })
  )
}

seed()

function getTurtles () {
  return [
    {
      name: 'Nelly'
    },
    {
      name: 'Scott'
    },
    {
      name: 'Geoff'
    },
    {
      name: 'Patrick'
    },
    {
      name: 'Jake'
    },
    {
      name: 'Kyam'
    },
    {
      name: 'Dave'
    },
    {
      name: 'Roy'
    }
  ]
}
