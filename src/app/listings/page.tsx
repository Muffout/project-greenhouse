import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ListingsList } from "./components/ListingsList";

export const metadata: Metadata = {
  title: "Listings",
  description: "List of listings",
};

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/listings/new"}>Create Listing</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <ListingsList />
      </Suspense>
    </div>
  );
}
