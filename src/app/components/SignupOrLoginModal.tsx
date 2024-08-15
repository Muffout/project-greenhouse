"use client"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { LoginForm } from "../(auth)/components/LoginForm"
import { SignupForm } from "../(auth)/components/SignupForm"
import { Dispatch, SetStateAction } from "react"

type ModalProps = {
  modalType: string
  isOpen: boolean
  onClose: () => void
  setModalType: Dispatch<SetStateAction<string>>
}

export const SignupOrLoginModal = (props: ModalProps) => {
  if (props.modalType == "login") {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <h1>Login</h1>{" "}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <LoginForm />
            </ModalBody>
            <ModalFooter>
              <div style={{ marginTop: "1rem" }}>
                Don&apos;t have an account yet?
                <Button
                  onClick={() => {
                    props.setModalType("signup")
                  }}
                >
                  Sign up
                </Button>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  if (props.modalType == "signup") {
    return (
      <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {" "}
              <h1>Sign Up</h1>{" "}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SignupForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  return <></>
}
