import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import { EditProfile } from "../../components/EditProfile"
import getCurrentUser from "@/src/app/users/queries/getCurrentUser"
import getUserById from "@/src/app/users/queries/getUserById"
import { useQuery } from "@blitzjs/rpc"
import getCurrentUserSettingsData from "@/src/app/users/queries/getCurrentUserSettingsData"
import { CurrentUser } from "@/src/app/propsType"
import { PageLayout } from "@/src/app/layout"

/// Page for /profiles/[id]/edit ///

export default async function Page({ params }: { params: { profileId: string } }) {
  const requestedUser = await invoke(getUserById, parseInt(params.profileId))
  function getUserData() {
    if (requestedUser.data) {
      const data: CurrentUser = {
        user: { id: requestedUser.data.id },
        name: requestedUser.data.name,
      }
      return data
    }
    return null
  }
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PageLayout body={<EditProfile data={requestedUser.data} isCurrentUser={true} />} />
      </Suspense>
    </div>
  )
}
