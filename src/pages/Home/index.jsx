import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
	return (
		<div className="container">
			<h1>Presence List</h1>
			<input type="text" placeholder="Type your name..." />
			<button type="button">Add</button>

			<Card name="Rato" time="10:20" />
			<Card name="Marrato" time="10:21" />
			<Card name="Risging" time="10:22" />
		</div>
	);
}

// export default Home;
