import { Spinner } from "@zeit-ui/react";
import { CSSProperties, useEffect, useRef } from "react";
import { useMyNotesQuery } from "../graphql/generated";
import { NoteCard } from "./NoteCard";

export const NoteList = () => {
	const gridRef = useRef<HTMLDivElement>(null);
	const { data, error } = useMyNotesQuery();

	const resizeMasonryItem = (item: HTMLDivElement) => {
		let grid = gridRef.current!;
		let rowGap = parseInt(
			window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
		);
		let rowHeight = parseInt(
			window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
		);
		let noteCard = item.querySelector<HTMLDivElement>(".note-card")!;

		let rowSpan = Math.ceil(
			(noteCard.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
		);

		item.style.gridRowEnd = `span ${rowSpan}`;
	};

	const resizeAllMasonryItems = () => {
		Array.from(gridRef.current?.children || []).forEach((elem) =>
			resizeMasonryItem(elem as HTMLDivElement)
		);
	};

	useEffect(resizeAllMasonryItems);

	if (error) return <div>INTERNAL SERVER ERROR!</div>;

	const styles: Record<string, CSSProperties> = {
		list: {
			padding: 20,
			display: "grid",
			gridGap: 10,
			gridTemplateColumns: "repeat( auto-fill, minmax( 300px, 1fr ) )",
			gridAutoRows: 0
		},
		listItem: {
			overflow: "hidden",
			position: "relative"
		}
	};

	if (data?.myNotes) {
		return (
			<div style={styles.list} ref={gridRef}>
				{data.myNotes.map((note) => (
					<div key={note.id} style={styles.listItem}>
						<NoteCard note={note} />
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="spinner-wrapper">
			<Spinner />
		</div>
	);
};
