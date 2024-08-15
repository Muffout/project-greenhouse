import { Ctx } from "blitz"
import db from "db"
import { CurrentUser } from "../../propsType"

export default async function getCurrentUser(_: null, ctx: Ctx) {
  if (!ctx.session.userId) return null
  const user = await db.profile.findFirst({
    where: { id: ctx.session.userId },
    select: {
      user: {
        select: {
          id: true,
        },
      },
    },
  })
  return user
}
