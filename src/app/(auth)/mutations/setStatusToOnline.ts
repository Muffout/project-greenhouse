import { Ctx } from "blitz"
import db from "db"

export default async function setStatusToOffline(_: null, ctx: Ctx) {
  if (!ctx.session.userId) return null
  const updateUser = await db.profile.update({
    where: { id: ctx.session.userId },
    data: {
      isOnline: true,
    },
  })
  return updateUser
}
