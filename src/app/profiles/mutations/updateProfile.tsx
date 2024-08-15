import db from "@/db"
import { SecurePassword } from "@blitzjs/auth/secure-password"
import { User, UserLoginData } from "../../propsType"
import { Ctx } from "blitz"

export default async function editProfile(user: UserLoginData) {

  async function updateUser() {
    const updateUserProfile = await db.profile.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
      },
    })
    const updateUserData = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashedPassword: user.password,
        email: user.email,
      },
    })
    return { updateUserProfile, updateUserData }
  }

  return updateUser()
}
