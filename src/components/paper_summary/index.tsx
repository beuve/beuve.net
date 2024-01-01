import './style.css';


enum PaperKind {
	Conference,
	Journal,
}

function paper_kind_to_string(paperKind: PaperKind) {
	switch (paperKind) {
		case PaperKind.Conference:
			return "Conference"
		case PaperKind.Journal:
			return "Journal"
	}
}

interface PaperProps {
	title: string;
	authors: Array<string>;
	link: string;
	tags: Array<string>;
	publisher: string;
	paper_kind: PaperKind;
	date: Date;
}

const PaperSumarry = (props: PaperProps) => {
	let tags = props.tags.map((t) => <li>{t}</li>)
	let authors = props.authors.reduce((acc, a) => acc + ', ' + a)
	return (
		<a href={props.link} class="paper-summary">
			<div class="kind">{paper_kind_to_string(props.paper_kind).toUpperCase()}</div>
			<div class="content">
				<h2>{props.title}</h2>
				<ul class="tags">{tags}</ul>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>
					{authors}
				</p>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>
					{props.publisher}
				</p>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>
					{props.date.getFullYear()}
				</p>
			</div>
		</a>
	);
};

const PaperSumarryPlaceholder = () => {
	return (
		<div class="paper-summary-placeholder">
			<p>
				No paper found
			</p>
		</div>
	);
};

export { PaperSumarry, PaperKind, PaperSumarryPlaceholder, paper_kind_to_string };
