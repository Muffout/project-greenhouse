import { Box, Center, Stack, Badge, useColorModeValue } from "@chakra-ui/react"
import ProfileButtons from "./ProfileButtons"
import ProfilePicture from "./ProfilePicture"
import { ProfileProps } from "../../propsType"
import ProfileDescription from "./ProfileDescription"
import { useSession } from "@blitzjs/auth"

export default function ProfileCard(props: ProfileProps) {
  const session = useSession()

  return (
    <Center py={6}>
      <Box
        w={"95%"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <ProfilePicture id={props.user?.id} currentUserId={session.userId} />
        <ProfileDescription
          name={props.user?.user?.name}
          description={props.user?.description}
          email={props.user?.user?.email}
        />

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #verified
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #plantparent
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #seller
          </Badge>
        </Stack>

        <Stack align={"center"} justify={"center"} mt={8} direction={"row"} spacing={4}>
          <ProfileButtons user={props.user} />
        </Stack>
      </Box>
    </Center>
  )
}
