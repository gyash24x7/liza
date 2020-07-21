import { schema } from "nexus";

schema.queryType({
	definition(t) {
		t.crud.user();
		t.field("me", {
			type: "User",
			nullable: true,
			resolve: (_parent, _args, { user }) => user
		});
	}
});
