import React, { useState } from 'react';
import './styles.css';
export default function Dropdown() {
	const [valSelect, setValSelect] = useState({ optionValue: '', optionText: '' });

	const handleChangeSelect = e => {
		//get item text
		const index = e.nativeEvent.target.selectedIndex;
		const text = e.nativeEvent.target[index].text;

		setValSelect({ optionValue: e.target.value, optionText: text });
	};

	return (
		<div className='select-container'>
			<form>
				<h2>Dropdown List</h2>
				<fieldset>
					<label for='simple'>Simple dropdown</label>
					<select id='simple' onChange={handleChangeSelect}>
						<option value=''>Select one item...</option>
						<option value='1'>First item</option>
						<option value='2'>Second item</option>
						<option value='3'>Third item</option>
					</select>
					<p>Selected value = {valSelect.optionValue}</p>
					<p>Corresponding text = {valSelect.optionText}</p>
					<label for='group'>Group dropdown</label>
					<select id='simple' onChange={handleChangeSelect}>
						<optgroup label='Group one'>
							<option value=''>Select one item...</option>
							<option value='1'>First item</option>
							<option value='2'>Second item</option>
							<option value='3'>Third item</option>
						</optgroup>
						<optgroup label='Group two'>
							<option value='4'>First item - group2</option>
							<option value='5'>Second item - group2</option>
							<option value='6'>Third item - group2</option>
						</optgroup>
					</select>
					<p>Selected value = {valSelect.optionValue}</p>
					<p>Corresponding text = {valSelect.optionText}</p>
				</fieldset>
			</form>
		</div>
	);
}
