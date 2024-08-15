import { PageLayout } from "@/src/app/layout"
import FetchListings from "@/src/app/listings/api/FetchRandomListings"
import { ListingsList } from "@/src/app/listings/components/ListingsList"
import createListing from "@/src/app/listings/mutations/createListing"
import { useMutation } from "@blitzjs/rpc"

//According to schema.prisma Listings table
export type testListing = {
  listingName: string
  price: number
  description: string
  imageUrl: string
}

export default async function ProfileListings() {
  return <ListingsList />
}
