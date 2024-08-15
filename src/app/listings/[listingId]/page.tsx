import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getListing from "../queries/getUserListingsById"
import { Listing } from "../components/Listing"

export async function generateMetadata({ params }: ListingPageProps): Promise<Metadata> {
  const Listing = await invoke(getListing, { id: Number(params.listingId) })
  return {
    title: `Listing ${Listing.id} - ${Listing.name}`,
  }
}

type ListingPageProps = {
  params: { listingId: string }
}

export default async function Page({ params }: ListingPageProps) {
  return (
    <div>
      <p>
        <Link href={"/listings"}>Listings</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Listing listingId={Number(params.listingId)} />
      </Suspense>
    </div>
  )
}
