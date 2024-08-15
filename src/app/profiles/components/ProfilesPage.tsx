"use client"
import { Badge, Box, Button, Card, CardBody, Link, Stack, Text } from "@chakra-ui/react"
import { ProfileList } from "../../propsType"
import ProfilePicture from "./ProfilePicture"
import SearchBar from "../../components/SearchBar"
import { ChatIcon } from "@chakra-ui/icons"
import { useSession } from "@blitzjs/auth"
import { PageLayout } from "../../layout"

export default function ProfilesPage(users: ProfileList) {
  const session = useSession()
  return (
    <PageLayout
      body={
        <>
          <Box w="md">
            <SearchBar />
          </Box>

          <Box paddingTop="50px">
            {users.profiles.map((profile) => (
              <Card key={profile.id} maxW="md">
                <CardBody>
                  <Stack direction="row" spacing="25px">
                    <ProfilePicture
                      name={profile.name}
                      id={profile.id}
                      currentUserId={session.userId}
                    />
                    <Stack align="start">
                      <Text>
                        <b>Name: </b>
                        {profile.name}
                        <Badge ml="1" colorScheme="green">
                          Plantparent
                        </Badge>
                      </Text>
                      <Text>
                        <b>Member since: </b>
                        {profile.createdAt.toLocaleDateString()}
                      </Text>
                      <Text>
                        <b>Last Online: </b>
                        {profile.createdAt.toLocaleDateString()}
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack direction="row">
                    <Link href={`/profiles/${profile.userId}`}>
                      <Button>See Profile</Button>
                    </Link>
                    <Link href={`/profiles/${profile.userId}/listings`}>
                      <Button
                        onClick={() => {
                        }}
                      >
                        See Listings
                      </Button>
                    </Link>
                    <Button leftIcon={<ChatIcon />} colorScheme="green">
                      Message
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Box>
        </>
      }
    />
  )
}
