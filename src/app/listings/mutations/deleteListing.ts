import { resolver } from "@blitzjs/rpc";
import db from "db";
import { DeleteListingSchema } from "../schemas";

export default resolver.pipe(
  resolver.zod(DeleteListingSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const listing = await db.listing.deleteMany({ where: { id } });

    return listing;
  }
);
