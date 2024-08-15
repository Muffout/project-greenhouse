import { useAuthenticatedBlitzContext } from "src/app/blitz-server"

import { Inter } from "next/font/google"
import { Box, ChakraProvider } from "@chakra-ui/react"

import { useSession } from "@blitzjs/auth"

import pageStyles from "../../styles/Profile.module.css"
import homeStyles from "../../styles/Home.module.css"

import { BlitzProvider } from "@blitzjs/rpc"

import Footer from "../../components/Footer"
import { Header } from "../../components/Header"

const inter = Inter({ subsets: ["latin"] })

type Layout = {
  body: JSX.Element
}

export default function ProfilePageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function HomepageLayout(props: Layout) {
  return (
    <>
      <ChakraProvider>
        <Box height="100%" width="100%">
          <div className={homeStyles.globe} />
          <div className={homeStyles.container}>
            <main className={homeStyles.main}>
              <div className={homeStyles.wrapper}>{props.body}</div>
            </main>
          </div>
        </Box>
      </ChakraProvider>
    </>
  )
}

export function PageLayout(props: Layout) {
  return (
    <>
      <ChakraProvider>
        <Box height="100%" width="100%">
          <div className={pageStyles.globe} />
          <div className={pageStyles.container}>
            <main className={pageStyles.main}>
              <div className={pageStyles.wrapper}>
                <Box
                  w={"100%"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  p={6}
                  textAlign={"center"}
                >
                  {props.body}
                </Box>
              </div>
            </main>
          </div>
        </Box>
      </ChakraProvider>
    </>
  )
}

export async function AuthLayout({ children }: { children: React.ReactNode }) {
  await useAuthenticatedBlitzContext({
    redirectTo: "/login",
  })
  return <>{children}</>
}
