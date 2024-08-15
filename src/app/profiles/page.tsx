import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import getCurrentUser from "../users/queries/getCurrentUser"
import { invoke } from "../blitz-server"
import { useCurrentUser } from "../users/hooks/useCurrentUser"
import { BlitzPage } from "@blitzjs/auth"
import { Profile } from "./components/Profile"
import getCurrentUserSettingsData from "../users/queries/getCurrentUserSettingsData"
import getAllProfiles from "./queries/getAllProfiles"
import ProfilesPage from "./components/ProfilesPage"

/// Page for /profiles ///

export default async function ProfilePage() {
  const currentUser = await invoke(getCurrentUser, null)
  const profiles = await invoke(getAllProfiles, null)
  return (
    <>
      <ProfilesPage profiles={profiles} currentUser={currentUser} />
    </>
  )
}
