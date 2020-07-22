import { genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { schema } from "nexus";
import { generateAvatar } from "../../utils/avatar";

schema.mutationType({
	definition(t) {
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

		t.field("createNote", {
			type: "Boolean",
			args: {
				title: schema.stringArg({ required: true }),
				content: schema.stringArg({ required: true })
			},
			async resolve(_parent, args, { db, user }) {
				if (!user) throw new Error("Unauthorized!");
				const note = await db.note
					.create({ data: { ...args, author: { connect: { id: user.id } } } })
					.catch((err) => {
						console.error(err);
						throw new Error("Internal Server Error!");
					});

				return !!note;
			}
		});
	}
});
