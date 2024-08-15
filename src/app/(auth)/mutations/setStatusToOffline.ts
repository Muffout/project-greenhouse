import { Ctx } from "blitz"
import db from "db"

export default async function setStatusToOffline(_: null, ctx: Ctx) {
  if (!ctx.session.userId) return null
  const updateUser = await db.user.update({
    where: { id: ctx.session.userId },
    data: {
      isOnline: false,
    },
  })
  return updateUser
}
