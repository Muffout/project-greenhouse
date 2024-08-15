"use client"
import { Button, useDisclosure } from "@chakra-ui/react"
import styles from "../styles/Home.module.css"
import { Dispatch, SetStateAction } from "react"
import { SignupOrLoginModal } from "./SignupOrLoginModal"

type SignUpButtonProps = {
  modalType: string
  setModalType: Dispatch<SetStateAction<string>>
}

export const SignUpButton = (props: SignUpButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function onClickHandler() {
    onOpen(), props.setModalType("signup")
  }

  return (
    <>
      <Button
        className={styles.signupButton}
        colorScheme="orange"
        onClick={() => {
          onClickHandler()
        }}
      >
        Sign Up
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
