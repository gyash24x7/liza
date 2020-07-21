import { genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { schema, use } from "nexus";
import { auth } from "nexus-plugin-jwt-auth";
import { prisma } from "nexus-plugin-prisma";
import { generateAvatar } from "../utils/avatar";

use(prisma({ features: { crud: true } }));
use(auth({ appSecret: process.env.JWT_SECRET! }));

schema.objectType({
	name: "User",
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.email();
		t.model.avatar();
	}
});

schema.queryType({
	definition(t) {
		t.crud.user();
		t.field("me", {
			type: "String",
			resolve(_parent, _args, { token }) {
				console.log(token);
				return "Hello";
			}
		});
	}
});

schema.mutationType({
	definition(t) {
		t.crud.updateOneUser();
		t.crud.deleteOneUser();
		t.field("login", {
			type: "String",
			args: {
				email: schema.stringArg({ required: true }),
				password: schema.stringArg({ required: true })
			},
			async resolve(_parent, { email, password }, { db }) {
				const user = await db.user.findOne({ where: { email } });
				if (!user) throw new Error("Invalid Credentials!");
				const hashedPassword = await hash(password, user.salt);
				if (hashedPassword !== user.password)
					throw new Error("Invalid Credentials!");

				return sign({ id: user.id }, process.env.JWT_SECRET!);
			}
		});
		t.field("signup", {
			type: "String",
			args: {
				name: schema.stringArg({ required: true }),
				email: schema.stringArg({ required: true }),
				password: schema.stringArg({ required: true })
			},
			async resolve(_parent, { name, email, password }, { db }) {
				let userExists = (await db.user.count({ where: { email } })) > 0;
				if (userExists) throw new Error("User Already Exists!");

				const salt = await genSalt();
				const hashedPassword = await hash(password, salt);
				const { url: avatar } = generateAvatar();

				const { id } = await db.user.create({
					data: { name, email, salt, password: hashedPassword, avatar }
				});

				return sign({ id }, process.env.JWT_SECRET!);
			}
		});
	}
});
