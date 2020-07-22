import { schema, use } from "nexus";
import { auth } from "nexus-plugin-jwt-auth";
import { paljs } from "nexus-plugin-paljs";
import { prisma } from "nexus-plugin-prisma";
import { User } from "nexus-plugin-prisma/client";

schema.addToContext(() => ({ user: null as User | null }));

schema.middleware(() => async (root, args, ctx, info, next) => {
	const id = getUserId(ctx.token);
	if (id) ctx.user = await ctx.db.user.findOne({ where: { id } });
	return await next(root, args, ctx, info);
});

use(
	prisma({
		features: { crud: true },
		client: { options: { log: ["error", "info", "query", "warn"] } }
	})
);
use(auth({ appSecret: process.env.JWT_SECRET! }));
use(paljs());

const getUserId = (token: any) => (token ? (token.id as string) : null);
