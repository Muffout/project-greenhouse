import "./styles/globals.css"
import { BlitzProvider } from "./blitz-client"
import { Inter } from "next/font/google"
import { Box, ChakraProvider } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { useSession } from "@blitzjs/auth"
import Footer from "./components/Footer"
import pageStyles from "./styles/Profile.module.css"
import homeStyles from "./styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

type Layout = {
  body: JSX.Element
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <BlitzProvider>
            <header>
              <Header />
            </header>

            <>{children}</>
            <footer>
              <Footer />
            </footer>
          </BlitzProvider>
        </ChakraProvider>
      </body>
    </html>
  )
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

function PageLayout(props: Layout) {
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
