import { useContext } from "react";

// components
import Header from './components/Header';
import Characters from './components/Characters';

// theme
import ThemeContext from './context/ThemeContext';

import './App.css';

function App() {
	const { background, foreground } = useContext(ThemeContext);

	return (
		<div className="App" style={{ background, color: foreground }}>
			<h1 style={{ margin: 0 }}>Hola Mundo</h1>
			<Header />
			<Characters />
		</div>
	);
}

export default App;
