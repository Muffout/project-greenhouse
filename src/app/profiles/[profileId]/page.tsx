import { Box, ChakraProvider, Stack } from "@chakra-ui/react"
import { invoke } from "../../blitz-server"
import { Profile } from "../components/Profile"
import styles from "../../styles/Profile.module.css"
import { Header } from "../../components/Header"
import getUserById from "../../users/queries/getUserById"
import { CurrentUser } from "../../propsType"

///Page for /profiles/[id] //

export default async function ProfilePage({ params }: { params: { profileId: string } }) {
  const profileId = parseInt(params.profileId)
  const requestedUser = await invoke(getUserById, profileId)

  return (
    <>
      <Profile user={requestedUser} />
    </>
  )
}
