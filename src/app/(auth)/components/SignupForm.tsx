"use client"
import { LabeledTextField } from "src/app/components/LabeledTextField"
import { Form, FORM_ERROR } from "src/app/components/Form"
import signup from "../mutations/signup"
import { name, Signup } from "../validations"
import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"
import { uniqueNamesGenerator, adjectives, colors, NumberDictionary } from "unique-names-generator"

function getRandomName() {
  const numberDictionary = NumberDictionary.generate({ min: 1, max: 99 })
  const randomName: string = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, numberDictionary],
    style: "capital",
    length: 3,
    separator: "",
  })

  return randomName
}

export const SignupForm = () => {
  const [signupMutation] = useMutation(signup)
  const router = useRouter()
  const randomName = getRandomName()
  return (
    <div>
      <h1>Create an Account</h1>

      <Form
        submitText="Create Account"
        schema={Signup}
        initialValues={{ email: "", password: "", name: randomName }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            router.refresh()
            router.push("/")
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <LabeledTextField name="name" label="Name" placeholder="Your Name" />
      </Form>
    </div>
  )
}
