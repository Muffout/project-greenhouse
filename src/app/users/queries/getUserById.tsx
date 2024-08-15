import { Ctx } from "blitz"
import db from "db"

export default async function getUserById(id: number | null, ctx: Ctx) {
  if (id == null) return null
  const data = await db.profile.findFirst({
    where: { userId: id },
    select: {
      id: true,
      isOnline: true,
      description: true,
      user: {
        select: {
          name: true,
          email: true,
          listings: true,
          role: true,
        },
      },
    },
  })
  return data
}
