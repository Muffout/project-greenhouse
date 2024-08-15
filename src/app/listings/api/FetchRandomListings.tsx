"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { Button, Image } from "@chakra-ui/react"
import axios from "axios"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import createListing from "../mutations/createListing"
import { useSession } from "@blitzjs/auth"
import { ListingCard } from "../components/ListingCard"

export const API_KEY = "sk-kmyO6670754d304435957"

export const ID = Math.floor(Math.random() * 1000)

export type testListing = {
  listingName: string
  price: string
  description: string
  imageUrl: string
}

export function titleCaseWord(word: string) {
  if (!word) return word
  return word[0].toUpperCase() + word.substr(1).toLowerCase()
}

export async function fetchData(setTestListing: Dispatch<SetStateAction<testListing | undefined>>) {
  try {
    const response = await axios.get(
      `https://perenual.com/api/species/details/${ID}?key=${API_KEY}`
    )
    const fetchedTestListing = {
      listingName: titleCaseWord(response.data.common_name),
      price: JSON.stringify(Number(response.data.id) / 10) + "0€",
      description: response.data.description,
      imageUrl: response.data.default_image.original_url,
    }
    setTestListing(fetchedTestListing)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

export default function FetchListings() {
  const [testListing, setTestListing] = useState<testListing>()
  const saveListing = useQuery(createListing, testListing)

  return (
    <>
      <Button
        onClick={() => {
          fetchData(setTestListing)
        }}
      />
      <ListingCard listing={testListing} />
    </>
  )
}
