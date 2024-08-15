import {
  Avatar,
  Box,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { LogoutButton } from "./LogoutButton"
import { useSession } from "@blitzjs/auth"

export default function UserMenu() {
  return (
    <Popover trigger={"click"} placement={"bottom-start"} isLazy>
      <PopoverTrigger>
        <Avatar />
      </PopoverTrigger>
      <PopoverContent width="150px">
        <UserMenuList />
      </PopoverContent>
    </Popover>
  )
}

const UserMenuList = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")
  const session = useSession()

  return (
    <Stack
      direction={"column"}
      spacing={2}
      alignItems="center"
      paddingTop="5px"
      paddingBottom="5px"
    >
      <Box width="100%" textAlign="center">
        Greetings, {session.name}!
      </Box>
      {USER_MENU_ITEMS.map((menuItem) => (
        <Box key={menuItem.label}>
          <Link
            p={2}
            href={`/profiles/${session.userId}` ?? "#"}
            fontSize={"m"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {menuItem.label}
          </Link>
        </Box>
      ))}
      <LogoutButton />
    </Stack>
  )
}

interface UserMenuItem {
  label: string
}

const USER_MENU_ITEMS: Array<UserMenuItem> = [
  {
    label: "Settings",
  },
  {
    label: "Listings",
  },
]
