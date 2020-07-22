import { schema } from "nexus";

schema.objectType({
	name: "Note",
	definition(t) {
		t.model.id();
		t.model.title();
		t.model.content();
		t.model.author();
	}
});
