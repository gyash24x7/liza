import { Button, Fieldset, Spacer } from "@zeit-ui/react";
import { Note } from "../graphql/generated";

interface NoteCardProps {
	note: Partial<Note>;
}

export const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<Fieldset className="note-card" style={{ position: "relative" }}>
			<Fieldset.Content>
				<Fieldset.Title>{note.title}</Fieldset.Title>
				<Fieldset.Subtitle>{note.content}</Fieldset.Subtitle>
			</Fieldset.Content>
			<Fieldset.Footer>
				<Fieldset.Footer.Actions>
					<Button auto size="mini">
						Actions
					</Button>
					<Spacer x={0.5} />
					<Button auto size="mini">
						Actions
					</Button>
				</Fieldset.Footer.Actions>
			</Fieldset.Footer>
		</Fieldset>
	);
};
