import React, { useState } from 'react';

export default function Dropdown() {
	const [valSelect, setValSelect] = useState({ optionValue: '', optionText: '' });

	const handleChangeSelect = e => {
		//get item text
		const index = e.nativeEvent.target.selectedIndex;
		const text = e.nativeEvent.target[index].text;

		setValSelect({ optionValue: e.target.value, optionText: text });
	};

	return (
		<div>
			<form>
				<fieldset>
					<div className='select-container'>
						<h2>Dropdown List</h2>
						<select onChange={handleChangeSelect}>
							<option value=''>Select one item...</option>
							<option value='1'>First item</option>
							<option value='2'>Second item</option>
							<option value='3'>Third item</option>
						</select>
						<p>Selected value = {valSelect.optionValue}</p>
						<p>Corresponding text = {valSelect.optionText}</p>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
