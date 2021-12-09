import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = React.useState("");
	const [list, setList] = React.useState([]);

	//	let lista = [
	//		<p>Comprar alimentos</p>,
	//		<p>pasear al perro</p>,
	//		<p>Hacer ejercicio</p>
	//	];

	const validateInput = () => {
		if (inputValue === "") alert("The input cannot be empty");
		else setList([...list, inputValue]);
	};

	const eliminarInput = index => {
		newList = list;
		newList.splice(index, 1);
		setList(newList); // ['cero', 'cuatro']
	};

	console.log(inputValue);
	console.log(list);

	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={validateInput}>Añadir</button>
			{list.map((item, index) => (
				<li key={index}>
					<p>{item}</p>
					<button onClick={eliminarInput(index)}>
						X
					</button>
				</li>
			))}
		</div>
	);
};

export default Home;
