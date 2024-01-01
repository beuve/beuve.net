import { h } from 'preact';
import './style.css';

interface TagInfos {
	label: string;
	activated: boolean;
}

interface TagsInfos {
	tags: TagInfos[][];
	toggle_tag: (tag: string) => void;
}

const sep = <div class="separator"></div>;

function create_tag_group(tags: TagInfos[], toggle_tag: (tag: string) => void): h.JSX.Element {
	const tags_elements = tags
		.map((t) => <li class={t.activated ? "active" : ""} onClick={() => toggle_tag(t.label)}>{t.label}</li>);
	return <ul class="tags">{tags_elements}</ul>
}

function create_tags_elements(props: TagsInfos): h.JSX.Element[] {
	return props.tags
		.map((ts) => create_tag_group(ts, props.toggle_tag))
		.reduce((res, elem, index) => { if (index != 0) { return [...res, sep, elem]; } else { return [elem]; } }, []);
}

const TagsFilter = (props: TagsInfos) => {
	return (
		<div class="tags_filter">
			{create_tags_elements(props)}
		</div>
	);
};

export { TagsFilter, TagInfos };
