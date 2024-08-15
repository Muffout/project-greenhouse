"use client"
import { Suspense } from "react"
import updateListing from "../mutations/updateListing"
import getListing from "../queries/getUserListingsById"
import { UpdateListingSchema } from "../schemas"
import { FORM_ERROR, ListingForm } from "./ListingForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditListing = ({ listingId }: { listingId: number }) => {
  const [listing, { setQueryData }] = useQuery(
    getListing,
    { id: listingId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateListingMutation] = useMutation(updateListing)
  const router = useRouter()
  return (
    <>
      <div>
        <h1>Edit Listing {listing.id}</h1>
        <pre>{JSON.stringify(listing, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <ListingForm
            submitText="Update Listing"
            schema={UpdateListingSchema}
            initialValues={listing}
            onSubmit={async (values) => {
              try {
                const updated = await updateListingMutation({
                  ...values,
                  id: listing.id,
                })
                await setQueryData(updated)
                router.refresh()
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}
