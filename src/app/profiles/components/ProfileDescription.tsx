import { Text, Box, Link, useColorModeValue, Heading } from "@chakra-ui/react"
import { DescriptionProps } from "../../propsType"

export default function ProfileDescription(props: DescriptionProps) {
  return (
    <>
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {props.name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {props.email}
      </Text>
      <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
        {props.description ? <>{props.description}</> : "This user has no description yet!"}
      </Text>
    </>
  )
}
