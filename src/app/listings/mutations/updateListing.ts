import { resolver } from "@blitzjs/rpc";
import db from "db";
import { UpdateListingSchema } from "../schemas";

export default resolver.pipe(
  resolver.zod(UpdateListingSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const listing = await db.listing.update({ where: { id }, data });

    return listing;
  }
);
