import { Avatar } from "@chakra-ui/react"
import { useState } from "react"
import { useOnlineStatus } from "../../users/hooks/useOnlineStatus"

type ProfilePictureProps = {
  id: number | null | undefined
  currentUserId: number | null | undefined
}

export default function ProfilePicture(props: ProfilePictureProps) {
  const isOnline = props.id === props.currentUserId

  return (
    <>
      {isOnline || null ? (
        <>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />{" "}
        </>
      ) : (
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "gray.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
      )}
    </>
  )
}
