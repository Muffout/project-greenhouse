"use client"
import styles from "../../styles/Home.module.css"
import logout from "../(auth)/mutations/logout"
import setStatusToOffline from "../(auth)/mutations/setStatusToOffline"
import { useRouter } from "next/navigation"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { Button } from "@chakra-ui/react"

export function LogoutButton() {
  const router = useRouter()
  const [logoutMutation] = useMutation(logout)
  const [setOStatusToOfflineMutation] = useMutation(setStatusToOffline)
  return (
    <>
      <Button
        colorScheme="green"
        onClick={async () => {
          await logoutMutation()
          await setOStatusToOfflineMutation()
          router.refresh()
        }}
      >
        Logout
      </Button>
    </>
  )
}
