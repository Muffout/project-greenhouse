"use client"
import styles from "../styles/Home.module.css"
import { Button, useDisclosure } from "@chakra-ui/react"
import { SignupOrLoginModal } from "./SignupOrLoginModal"
import { Dispatch, SetStateAction } from "react"
import setStatusToOnline from "../(auth)/mutations/setStatusToOnline"
import { useMutation } from "@blitzjs/rpc"

type LoginButtonProps = {
  setModalType: Dispatch<SetStateAction<string>>
  modalType: string
}

export const LoginButton = (props: LoginButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [setOStatusToOnlineMutation] = useMutation(setStatusToOnline)

  function onClickHandler() {
    onOpen(), props.setModalType("login"), setOStatusToOnlineMutation
  }

  return (
    <>
      <Button
        className={styles.loginButton}
        colorScheme="green"
        onClick={() => {
          onClickHandler()
        }}
      >
        Log In
      </Button>

      <SignupOrLoginModal
        modalType={props.modalType}
        setModalType={props.setModalType}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
