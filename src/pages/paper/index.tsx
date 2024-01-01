import './style.css';
import lazy from 'preact-lazy';

type PaperName = {
	name: string
}

const Paper = (props: PaperName) => {
	let Article = lazy(() => import(`../../articles/${props.name}/article.mdx`));
	return <section class="paper">
		<Article />
	</section>;
};

export default Paper;
