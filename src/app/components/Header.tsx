"use client"
import { Box, Container, Image } from "@chakra-ui/react"
import logo from "../public/logo.png"
import Navbar from "./Navbar"
import { CurrentUser, User } from "../propsType"
import { useSession } from "@blitzjs/auth"

export function Header() {
  return (
    <Box>
      <Navbar />
    </Box>
  )
}
