"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteListing from "../mutations/deleteListing"
import getListing from "../queries/getUserListingsById"
import { Card, Stack, Text } from "@chakra-ui/react"
import { ListingCard } from "./ListingCard"

export const Listing = () => {
  const testListing = {
    listingName: "testname",
    price: "123.00€",
    description: "This is the description.",
    imageUrl:
      "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }

  return (
    <>
      <ListingCard listing={testListing} />
    </>
  )
}
