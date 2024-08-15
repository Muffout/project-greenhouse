import { Ctx } from "blitz"
import db from "db"

export default async function getUserListingsById(id: number | null, ctx: Ctx) {
  if (id == null) return null
  const listings = await db.listings.findMany({
    where: { userId: id },
    select: {
      listingName: true,
      price: true,
      description: true,
    },
  })
  return listings
}
