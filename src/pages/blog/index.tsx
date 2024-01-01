import { h } from 'preact';
import { signal } from "@preact/signals";
import './style.css';
import { ArticleSumarry, ArticleSumarryPlaceholder } from '../../components/article_summary';
import { TagsFilter, TagInfos } from '../../components/tags_filters';
import { add_date_separators } from '../../components/date_separator';

const _tags = [["deepfake", "deep learning", "watermarking", "metric learning"],
["2023"]];

const article_list: Array<h.JSX.Element> = [
]

var filter_list = signal(_tags.map((ts) => ts.map((t) => ({ label: t, activated: false }))));

function toggle_filter(tag: string) {
	filter_list.value = filter_list.value.map((ts) => ts.map((t) => {
		if (t.label == tag) {
			return { activated: !t.activated, label: t.label }
		} else {
			return t
		}
	}))
}

function filter_articles(tags: TagInfos[][]): h.JSX.Element[] {
	if (article_list.length == 0) {
		return [<ArticleSumarryPlaceholder />];
	}
	if (tags.filter((ts) => ts.filter((t) => t.activated).length != 0).length == 0) {
		return add_date_separators(article_list);
	}
	var res = article_list;

	let tags_set = new Set(tags[0].filter((t) => t.activated).map((t) => t.label));
	if (tags[0].filter((t) => t.activated).length != 0) {
		res = res
			.filter((e) => e.props.tags.filter((t: string) => tags_set.has(t)).length != 0);
	}

	let date_set = new Set(tags[1].filter((t) => t.activated).map((t) => Number(t.label)));
	if (tags[1].filter((t) => t.activated).length != 0) {
		res = res
			.filter((e) => date_set.has(e.props.date.getFullYear()));
	}

	if (res.length == 0) {
		return [<ArticleSumarryPlaceholder />];
	}
	return add_date_separators(res);
}

const Blog = () => {
	return (
		<section class="blog">
			<TagsFilter tags={filter_list.value} toggle_tag={toggle_filter} />
			<div class="article-list">
				{filter_articles(filter_list.value)}
			</div>
		</section>
	);
};

export default Blog;
