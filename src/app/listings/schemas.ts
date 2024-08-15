import { z } from "zod"

export const CreateListingSchema = z.object({
  listingName: z.string(),
  price: z.number(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateListingSchema = CreateListingSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteListingSchema = z.object({
  id: z.number(),
})
