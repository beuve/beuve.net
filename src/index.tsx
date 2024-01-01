import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/header/index.jsx';
import Home from './pages/home/index.jsx';
import Papers from './pages/papers/index.jsx';
import Paper from './pages/paper/index.jsx';
import Projects from './pages/projects/index.js';
import Blog from './pages/blog/index.js';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/papers" component={Papers} />
					<Route path="/paper/:name" component={Paper} />
					<Route path="/projects" component={Projects} />
					<Route path="/blog" component={Blog} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
