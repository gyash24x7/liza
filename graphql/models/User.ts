import { schema } from "nexus";

schema.objectType({
	name: "User",
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.email();
		t.model.avatar();
		t.model.notes();
	}
});
