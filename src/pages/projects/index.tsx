import './style.css';

const Projects = () => {
	return (
		<section class="projects">
			<Project
				title="GRAPHISM"
				link=""
				img="/project-graphism.svg"
			/>
			<Project
				title="ARBENN"
				link=""
				img="/project-arbenn.svg"
			/>
			<Project
				title="CHESS E."
				link=""
				img="/project-chess.svg"
			/>
		</section>
	);
};

interface ProjectProps {
	title: string;
	link: string;
	img: string;
}

const Project = (props: ProjectProps) => {
	return (
		<a class="project" href={props.link}>
			<h3>{props.title}</h3>
			<img src={props.img} />
		</a>
	);
};

export default Projects;
