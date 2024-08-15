import db from "db"

export default async function getAllProfiles() {
  const profiles = await db.profile.findMany()
  return profiles
}
