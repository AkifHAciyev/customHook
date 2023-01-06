import './App.css';
import Interval from './components/Interval';
import WindowSize from './components/WindowSize';

function App() {
	return (
		<div className="App">
			<h2>Window size</h2>
			<WindowSize />
			<h2>useInterval</h2>
			<Interval />
		</div>
	);
}

export default App;
