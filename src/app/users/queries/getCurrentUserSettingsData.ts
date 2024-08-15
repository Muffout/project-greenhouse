import { Ctx } from "blitz"
import db from "db"

export default async function getCurrentUserSettingsData(_: null, ctx: Ctx) {
  if (!ctx.session.userId) return null
  const userProfile = await db.profile.findFirst({
    where: { id: ctx.session.userId },
    select: {
      id: true,
      name: true,
      user: { select: { email: true, hashedPassword: true } },
    },
  })

  return userProfile
}
