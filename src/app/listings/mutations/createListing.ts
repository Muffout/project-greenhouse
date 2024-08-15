import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateListingSchema } from "../schemas"

export default async function createListing(
  input: { listing: { listingName: string; price: number; description: string } },
  ctx: any
) {
  const userId = ctx.session.userId
  const listing = await db.listings.create({
    data: {
      listingName: input.listing.listingName,
      price: input.listing.price,
      description: input.listing.description,
      userId: userId,
    },
  })
  return listing
}
