import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './global.css';
import Landing from './pages/Landing';
import Dropdown from './pages/Dropdown/index';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/dropdown' component={Dropdown} />
			</Switch>
		</Router>
	);
}

export default App;
