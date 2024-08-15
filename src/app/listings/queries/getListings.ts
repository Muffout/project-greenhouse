import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetListingsInput
  extends Pick<Prisma.ListingsFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetListingsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: listings,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.listings.count({ where }),
      query: (paginateArgs) => db.listings.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      listings,
      nextPage,
      hasMore,
      count,
    }
  }
)
