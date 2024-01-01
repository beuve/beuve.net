import { useEffect, useState } from 'preact/hooks';
import './style.css';
import { ExperienceSumarry } from '../../components/experience_summary';
import { h } from 'preact';

function Experiences(props) {

	return <div class="box experiences" {...props}>
		<h2>EXPERIENCES</h2>
		<ExperienceSumarry
			title="Associate professor"
			tags={["artificial inteligence", "mathematical modeling", "life cycle assesments"]}
			company="INSA Rennes"
			location="Rennes"
			date="2023 - now"
		/>
		<ExperienceSumarry
			title="Data Engineer"
			tags={["ocaml", "postgresql", "git", "docker", "linux"]}
			company="BeSport"
			location="Paris"
			date="2019 - 2020"
		/>
		<ExperienceSumarry
			title="Software Engineer"
			tags={["c", "c++", "c#", "windows"]}
			company="Astek"
			location="Toulouse"
			date="2019"
		/>
		<ExperienceSumarry
			title="Substitute teacher"
			tags={["Mathematics", "Physics"]}
			company="Collège Jean Paul II"
			location="Coutances"
			date="2018"
		/>
	</div>
}

function Education(props) {
	return <div class="box experiences" {...props}>
		<h2>EDUCATION</h2>
		<ExperienceSumarry
			title="PhD in Signal, Image, and Vision"
			tags={["deepfake", "deep learning", "pytorch"]}
			company="INSA Rennes"
			location="Rennes"
			date="2020 - 2023"
		/>
		<ExperienceSumarry
			title="Engineer in Image and Signal Processing"
			tags={["image processing", "signal processing"]}
			company="Phelma"
			location="Grenoble"
			date="2015 - 2018"
		/>
		<ExperienceSumarry
			title="Classe préparatoire aux grandes écoles"
			tags={["mathematics", "physics"]}
			company="Lycée Malherbe"
			location="Caen"
			date="2013 - 2015"
		/>
		<ExperienceSumarry
			title="High school baccalaureate"
			tags={["mathematics", "physics"]}
			company="Lycée Lebrun"
			location="Coutances"
			date="2013"
		/>
	</div>
}

function Infos(infos) {
	const { show_name, ...props } = infos;
	const title = show_name ? <h2>Nicolas BEUVE, PhD</h2> : <h2>INFOS</h2>;
	return <div class="box infos" {...props}>
		{title}
		<div class="infos-input">
			<h3>Address</h3>
			<div class="address">
				<p>Univ Rennes</p>
				<p>INSA Rennes - EII Department</p>
				<p>CNRS, IETR - UMR6164</p>
				<p>20, Avenue des buttes de Coësmes</p>
				<p>35708 Rennes, France</p>
			</div>
		</div>
		<div class="infos-input">
			<h3>Email</h3>
			<p>
				nbeuve@insa-rennes.fr
			</p>
		</div>
		<div class="infos-input">
			<ul>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
					LinkedIn
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
					Github
				</li>
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M390.9 298.5c0 0 0 .1 .1 .1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64h0c1.7-3.6 3.6-7.2 5.6-10.7c4.4-7.6 9.4-14.7 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7 256 0 512 202.7l-94.7 77.1z" /></svg>
					Scholar
				</li>
			</ul>
		</div>
	</div>
}

function Competences(props) {
	return <div class="box" {...props}>
		<h2>SKILLS</h2>
		<ul class="tags">
			<li>image processing</li>
			<li>signal processing</li>
			<li>deep learning</li>
			<li>programming</li>
			<li>python</li>
			<li>ocaml</li>
			<li>rust</li>
			<li>docker</li>
			<li>git</li>
			<li>bash</li>
			<li>linux</li>
			<li>pytorch</li>
			<li>keras</li>
			<li>opencv</li>
			<li>sklearn</li>
			<li>scipy</li>
			<li>inkscape</li>
			<li>affinity designer</li>
		</ul>
	</div>
}


function Hobbies(props) {
	return <div class="box" {...props}>
		<h2>HOBBIES</h2>
		<ul class="tags">
			<li>hiking</li>
			<li>chess</li>
			<li>cycling</li>
			<li>cinema</li>
			<li>graphism</li>
			<li>programming</li>
			<li>reading</li>
		</ul>
	</div>
}

function Languages(props) {
	return <div class="box languages" {...props}>
		<h2>LANGUAGES</h2>
		<div class="language-entry">
			<img src="/fr-flag.svg" />
			<span>French - native language</span>
		</div>
		<div class="language-entry">
			<img src="/en-flag.svg" />
			<span>English - fluent</span>
		</div>
	</div>
}

function Photo(props) {
	return <div class="box photo" {...props}></div>
}

function LayoutAbove1200(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<div class="column" style="flex:2">
				<Photo style="flex:2; min-height: 23rem" />
				<div class="box"><h2>Nicolas BEUVE, PhD</h2></div>
				<Languages style="flex:2" />
			</div>
			<Experiences style="flex:3" />
			<Education style="flex:3" />
		</div >
		<div class="row">
			<Infos show_name={false} style="flex:2" />
			<div class="column" style="flex:5">
				<Competences style="flex:5" />
				<Hobbies style="flex:2" />
			</div>
		</div>
	</div >
}

function LayoutBelow1200(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 20rem" />
			<Infos show_name={true} style="flex:2" />
			<Competences style="flex:2" />
		</div>
		<div class="row">
			<div class="column" style="flex:2">
				<Hobbies style="flex:2" />
				<Languages style="flex:1" />
			</div>
			<Experiences style="flex:5" />
			<Education style="flex:5" />
		</div >
	</div >
}

function LayoutBelow1100(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 20rem" />
			<Infos show_name={true} style="flex:2" />
			<Competences style="flex:2" />
		</div>
		<div class="row">
			<Experiences style="flex:3" />
			<Education style="flex:3" />
		</div >
		<div class="row">
			<Hobbies style="flex:2" />
			<Languages style="flex:1" />
		</div >
	</div >
}

function LayoutBelow1000(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 20rem" />
			<Infos show_name={true} style="flex:3" />
		</div>
		<div class="row">
			<Experiences style="flex:1" />
			<Education style="flex:1" />
		</div >
		<div class="row">
			<Competences style="flex:3" />
		</div>
		<div class="row">
			<Hobbies style="flex:2" />
			<Languages style="flex:1" />
		</div >
	</div >
}
function LayoutBelow900(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 15rem" />
			<Infos show_name={true} style="flex:3" />
		</div>
		<div class="row">
			<Experiences style="flex:1" />
		</div >
		<div class="row">
			<Education style="flex:1" />
		</div >
		<div class="row">
			<Competences style="flex:1" />
		</div>
		<div class="row">
			<Hobbies style="flex:2" />
			<Languages style="flex:1" />
		</div >
	</div >
}
function LayoutBelow700(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 20rem" />
			<Infos show_name={true} style="flex:3" />
		</div>
		<div class="row">
			<Education style="flex:1" />
		</div >
		<div class="row">
			<Experiences style="flex:1" />
		</div >
		<div class="row">
			<Competences style="flex:1" />
		</div>
		<div class="row">
			<Hobbies style="flex:2" />
		</div >
		<div class="row">
			<Languages style="flex:1" />
		</div >
	</div >
}

function LayoutBelow500(): h.JSX.Element {
	return <div class="home">
		<div class="row">
			<Photo style="flex:2; min-height: 20rem" />
		</div>
		<div class="row">
			<Infos show_name={true} style="flex:3" />
		</div>
		<div class="row">
			<Education style="flex:1" />
		</div >
		<div class="row">
			<Experiences style="flex:1" />
		</div >
		<div class="row">
			<Competences style="flex:1" />
		</div>
		<div class="row">
			<Hobbies style="flex:2" />
		</div >
		<div class="row">
			<Languages style="flex:1" />
		</div >
	</div >
}

function LayoutSelector() {
	const [width, setWidth] = useState(window.innerWidth);

	function onResize() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	if (width > 1200) {
		return <LayoutAbove1200 />
	} else if (width > 1100) {
		return <LayoutBelow1200 />
	} else if (width > 1000) {
		return <LayoutBelow1100 />
	} else if (width > 900) {
		return <LayoutBelow1000 />
	} else if (width > 700) {
		return <LayoutBelow900 />
	} else if (width > 500) {
		return <LayoutBelow700 />;
	} else {
		return <LayoutBelow500 />;
	}
}

const Home = () => {
	return (
		<LayoutSelector />
	);
};

export default Home;
