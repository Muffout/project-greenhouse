import { Button, Link } from "@chakra-ui/react"
import { ProfileProps, RequestedUser } from "../../propsType"
import { useSession } from "@blitzjs/auth"

export default function ProfileButtons(props: ProfileProps) {
  const session = useSession()
  const isCurrentUser = session.userId === props.user?.id
  if (isCurrentUser) {
    return (
      <>
        <Link href={`/profiles/${props.user?.id}/edit`}>
          <Button
            maxW={"200px"}
            size={"md"}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Edit
          </Button>
        </Link>
      </>
    )
  }
  return (
    <>
      <Button
        maxW={"200px"}
        size={"md"}
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        _focus={{
          bg: "gray.200",
        }}
      >
        Message
      </Button>
      <Button
        size={"md"}
        maxW={"200px"}
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        Follow
      </Button>
    </>
  )
}
