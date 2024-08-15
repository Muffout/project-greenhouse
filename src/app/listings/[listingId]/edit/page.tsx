import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getListing from "../../queries/getUserListingsById"
import { EditListing } from "../../components/EditListing"

type EditListingPageProps = {
  params: { listingId: string }
}

export async function generateMetadata({ params }: EditListingPageProps): Promise<Metadata> {
  const Listing = await invoke(getListing, { id: Number(params.listingId) })
  return {
    title: `Edit Listing ${Listing.id} - ${Listing.name}`,
  }
}

export default async function Page({ params }: EditListingPageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditListing listingId={Number(params.listingId)} />
      </Suspense>
    </div>
  )
}
