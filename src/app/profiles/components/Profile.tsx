"use client"
import ProfileCard from "./ProfileCard"
import { ProfileProps } from "../../propsType"

/// Component for rendering the profile page - if it's the user's page who is currently logged in, it also renders an edit page ///

export const Profile = (props: ProfileProps) => {
  if (!props.user) {
    return <h1>User not found!</h1>
  }

  return (
    <>
      <div>
        <ProfileCard user={props.user} />
      </div>
    </>
  )
}
