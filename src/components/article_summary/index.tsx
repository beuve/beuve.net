import './style.css';

interface ArticleProps {
	title: string;
	link: string;
	tags: Array<string>;
	date: Date;
}

const ArticleSumarry = (props: ArticleProps) => {
	let tags = props.tags.map((t) => <li>{t}</li>)
	return (
		<a href={props.link} class="article-summary">
			<div class="content">
				<h2>{props.title}</h2>
				<ul class="tags">{tags}</ul>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
						<path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
					</svg>
					{props.date.toDateString()}
				</p>
			</div>
		</a>
	);
};

const ArticleSumarryPlaceholder = () => {
	return (
		<div class="article-summary-placeholder">
			<p>
				No article found
			</p>
		</div>
	);
};

export { ArticleSumarry, ArticleProps, ArticleSumarryPlaceholder };
