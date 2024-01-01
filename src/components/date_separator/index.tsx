import './style.css';
import { h } from 'preact';

const DateSeparator = (props: { date: Number }) => {
	return (
		<div class="date-separator">
			{props.date}
			<hr />
		</div>
	);
};

function add_date_separators(elements: h.JSX.Element[]): h.JSX.Element[] {
	var current_year = -1;
	var res: h.JSX.Element[] = [];

	for (let index = 0; index < elements.length; index++) {
		const element = elements[index];
		const element_year = element.props.date.getFullYear()
		if (element_year != current_year) {
			current_year = element_year;
			res.push(<DateSeparator date={current_year} />);
		}
		res.push(element);
	}
	return res;
}

export { add_date_separators };
