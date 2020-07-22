import { schema } from "nexus";

schema.queryType({
	definition(t) {
		t.field("me", {
			type: "User",
			nullable: true,
			resolve: (_parent, _args, { user }) => user
		});

		t.field("hello", {
			type: "String",
			resolve: () => "Hello!"
		});

		t.list.field("myNotes", {
			type: "Note",
			async resolve(_parent, _args, { db, user, select }) {
				if (!user) throw new Error("Unauthorised!");
				const notes = await db.note
					.findMany({ where: { authorId: user.id }, ...select })
					.catch((err) => {
						console.error(err);
						throw new Error("Internal Server Error!");
					});

				return notes;
			}
		});
	}
});
