import { Box, Center, Flex, Link, Stack, Text, Image } from "@chakra-ui/react"
import styles from "../styles/Home.module.css"

export default function LandingPageTextField() {
  return (
    <>
      <Flex paddingLeft="150px" paddingTop="200px">
        <Stack direction="column">
          <Box>
            <Text fontSize="6xl" as="b">
              Save a plant. <br />
              Become a Plantparent.
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl">
              Looking for some greenery? <br />
              Don’t buy -{" "}
              <Link
                color="#5B7F12"
                href="/browse"
                fontWeight="semibold"
                className={styles.adoptText}
              >
                adopt.
              </Link>
              <br />
              Browse our listings of plants looking for their new home.
            </Text>
          </Box>
        </Stack>
      </Flex>
      <Box boxSize="sm" paddingLeft="1550px" zIndex="-1">
        <Image
          src="/plantparent_icon.png"
          alt="plantparent icon"
          position="fixed"
          boxSize="sm"
          paddingBottom="20px"
        />
      </Box>
    </>
  )
}
