import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
export default function Landing() {
	return (
		<div id='landing-container'>
			<div>
				<h1>Basic Forms components</h1>
				<ul>
					<li>
						<Link to='/dropdown'>DropdownList</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
