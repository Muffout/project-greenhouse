"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteListing from "../mutations/deleteListing"
import getListing from "../queries/getUserListingsById"
import { Card, Stack, Text, Image, Box } from "@chakra-ui/react"

type ListingData = {
  listing:
    | {
        listingName: string
        price: string | number
        description: string
      }
    | undefined
}
export const TEST_IMAGE_URL =
  "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
export const ListingCard = (props: ListingData) => {
  return (
    <Card width="50%" padding="20px">
      <Stack direction="row">
        <Box width="200%" padding="10px" alignContent="center">
          <Image src={TEST_IMAGE_URL} borderWidth="1px" borderRadius="lg" boxSize="200px" />
        </Box>

        <Stack>
          <Text as="b">Name: </Text>
          <Text>{props.listing?.listingName}</Text>
          <Text as="b">Price: </Text>
          <Text> {props.listing?.price}</Text>
          <Text as="b">Description: </Text>
          <Text>{props.listing?.description}</Text>
        </Stack>
      </Stack>
    </Card>
  )
}
