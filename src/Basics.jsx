import React, { useState } from 'react';

export default function Basics() {
	const [valSelect, setValSelect] = useState();
	const [valInput, setValInput] = useState('');
	const [isChecked, setIsChecked] = useState({
		check1: false,
		check2: false,
		check3: false,
		check4: false,
	});
	const [radio, setRadio] = useState('');

	const handleChangeSelect = e => {
		setValSelect(e.target.value);
	};

	const handleChangeInput = e => {
		setValInput(e.target.value);
	};

	const handleClickSelect = e => {
		const index = e.nativeEvent.target.selectedIndex;
		console.log('selecionado ', e.nativeEvent.target[index].text);
	};

	const handleCheck = e => {
		const updated = { ...isChecked, [e.target.name]: e.target.checked };
		setIsChecked(updated);
	};

	const handleRadioChange = e => {
		setRadio(e.target.value);
		console.log('e -> value ', e.target.value);
	};

	return (
		<div className='App'>
			<select onChange={handleChangeSelect} onClick={handleClickSelect}>
				<option value='1'>Primeiro</option>
				<option value='2'>Segundo</option>
				<option value='3'>Terceiro</option>
			</select>
			<p>{valSelect}</p>
			<input
				onChange={handleChangeInput}
				type='text'
				placeholder='testando input'
				value={valInput}
			/>
			<p>{valInput}</p>
			<p>CheckBoxes</p>
			<label>
				CheckBox1
				<input type='checkbox' name='check1' onChange={handleCheck} checked={isChecked.check1} />
			</label>
			<label>
				CheckBox2
				<input type='checkbox' name='check2' onChange={handleCheck} checked={isChecked.check2} />
			</label>
			<label>
				CheckBox3
				<input type='checkbox' name='check3' onChange={handleCheck} checked={isChecked.check3} />
			</label>
			<label>
				CheckBox4
				<input type='checkbox' name='check4' onChange={handleCheck} checked={isChecked.check4} />
			</label>

			<p>Radios</p>

			<input
				type='radio'
				name='radioGroup'
				id='myRadio1'
				value='radio1'
				checked={radio === 'radio1'}
				onChange={handleRadioChange}
			/>
			<label for='myRadio1'>Radio 1</label>

			<input
				id='myRadio2'
				type='radio'
				name='radioGroup'
				value='radio2'
				checked={radio === 'radio2'}
				onChange={handleRadioChange}
			/>
			<label for='myRadio2'>Radio 2</label>
		</div>
	);
}
