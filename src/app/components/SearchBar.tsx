import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react"

type SearchBarProps = {}

export default function SearchBar() {
  return (
    <>
      <InputGroup size="md">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray" />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </>
  )
}
