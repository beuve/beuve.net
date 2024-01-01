import { h } from 'preact';
import { signal } from "@preact/signals";
import './style.css';
import { PaperSumarry, PaperKind, paper_kind_to_string, PaperSumarryPlaceholder } from '../../components/paper_summary'
import { TagsFilter, TagInfos } from '../../components/tags_filters';
import { add_date_separators } from '../../components/date_separator';

const _tags = [["deepfake", "deep learning", "watermarking", "metric learning"]
	, ["Journal", "Conference"]
	, ["2023", "2021"]];

const paper_list: Array<h.JSX.Element> = [
	<PaperSumarry
		title="WaterLo: Protect Images from Deepfakes Using Localized Semi-Fragile Watermark"
		authors={["Nicolas Beuve", "Wassim Hamidouche", "Olivier Déforges"]}
		link="/paper/waterlo"
		tags={["deepfake", "deep learning", "watermarking"]}
		publisher='International Conference on Computer Vision (ICCV)'
		paper_kind={PaperKind.Conference}
		date={new Date('2023')}
	/>,
	<PaperSumarry
		title="Hierarchical Learning and Dummy Triplet Loss for Efficient Deepfake Detection"
		authors={["Nicolas Beuve", "Wassim Hamidouche", "Olivier Déforges"]}
		link="/paper/hierarchical-learning"
		tags={["deepfake", "deep learning", "metric learning"]}
		publisher='ACM Transactions on Multimedia Computing, Communications and Applications'
		paper_kind={PaperKind.Journal}
		date={new Date('2023')}
	/>,
	<PaperSumarry
		title="DmyT: Dummy Triplet Loss for Deepfake Detection"
		authors={["Nicolas Beuve", "Wassim Hamidouche", "Olivier Déforges"]}
		link="/paper/dmyt"
		tags={["deepfake", "deep learning", "metric learning"]}
		publisher='Workshop on Synthetic Multimedia-Audiovisual Deepfake Generation and Detection @ ACMM21'
		paper_kind={PaperKind.Conference}
		date={new Date('2021')}
	/>
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

function filter_papers(tags: TagInfos[][]): h.JSX.Element[] {
	if (tags.filter((ts) => ts.filter((t) => t.activated).length != 0).length == 0) {
		return add_date_separators(paper_list);
	}

	var res = paper_list;

	let tags_set = new Set(tags[0].filter((t) => t.activated).map((t) => t.label));
	if (tags[0].filter((t) => t.activated).length != 0) {
		res = res
			.filter((e) => e.props.tags.filter((t: string) => tags_set.has(t)).length != 0);
	}

	let paper_kind_set = new Set(tags[1].filter((t) => t.activated).map((t) => t.label));
	if (tags[1].filter((t) => t.activated).length != 0) {
		res = res
			.filter((e) => paper_kind_set.has(paper_kind_to_string(e.props.paper_kind)));
	}

	let date_set = new Set(tags[2].filter((t) => t.activated).map((t) => Number(t.label)));
	if (tags[2].filter((t) => t.activated).length != 0) {
		res = res
			.filter((e) => date_set.has(e.props.date.getFullYear()));
	}

	if (res.length == 0) {
		return [<PaperSumarryPlaceholder />];
	}

	return add_date_separators(res);

}

const Papers = () => {
	return (
		<section class="papers">
			<TagsFilter tags={filter_list.value} toggle_tag={toggle_filter} />
			<div class="paper-list">
				{filter_papers(filter_list.value)}
			</div>
		</section>
	);
};

export default Papers;
