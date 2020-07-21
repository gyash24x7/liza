import { schema, use } from "nexus";
import { auth } from "nexus-plugin-jwt-auth";
import { prisma } from "nexus-plugin-prisma";
import { User } from "nexus-plugin-prisma/client";

schema.addToContext(() => ({ user: null as User | null }));

schema.middleware(() => async (root, args, ctx, info, next) => {
	const id = getUserId(ctx.token);
	ctx.user = await ctx.db.user.findOne({ where: { id } });
	return await next(root, args, ctx, info);
});

use(prisma({ features: { crud: true } }));
use(auth({ appSecret: process.env.JWT_SECRET! }));

const getUserId = (token: any) => token.id as string;
