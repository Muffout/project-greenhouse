"use client";
import { FORM_ERROR, ListingForm } from "./ListingForm";
import { CreateListingSchema } from "../schemas";
import { useMutation } from "@blitzjs/rpc";
import createListing from "../mutations/createListing";
import { useRouter } from "next/navigation";

export function New__ModelName() {
  const [createListingMutation] = useMutation(createListing);
  const router = useRouter();
  return (
    <ListingForm
      submitText="Create Listing"
      schema={CreateListingSchema}
      onSubmit={async (values) => {
        try {
          const listing = await createListingMutation(values);
          router.push(`/listings/${listing.id}`);
        } catch (error: any) {
          console.error(error);
          return {
            [FORM_ERROR]: error.toString(),
          };
        }
      }}
    />
  );
}
