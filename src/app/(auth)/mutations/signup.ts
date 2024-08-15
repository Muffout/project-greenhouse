import db from "db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { uniqueNamesGenerator, adjectives, colors, NumberDictionary } from "unique-names-generator"

export default async function signup(
  input: { password: string; email: string; name: string },
  ctx: any
) {
  const blitzContext = ctx
  const hashedPassword = await SecurePassword.hash((input.password as string) || "test-password")
  const email = (input.email as string) || "test" + Math.random() + "@test.com"

  const name = input.name as string

  const user = await db.user.create({
    data: { email, hashedPassword, name },
  })

  await blitzContext.session.$create({
    userId: user.id,
    role: "user",
    name: name,
  })

  const profile = await db.profile.create({
    data: { userId: user.id },
  })

  return { userId: blitzContext.session.userId, ...user, email: input.email, profile }
}
