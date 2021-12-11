import React from "react";

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

	const eliminarInput = indexBorrar => {
		setList(prevState =>
			prevState.filter((item, index) => index !== indexBorrar)
		);
	};

	console.log(inputValue);
	console.log(list);

	return (
		<div>
			<h2 className="d-flex justify-content-center text-center">
				My To-Do List
			</h2>
			<div className="d-flex justify-content-center">
				<input
					type="text"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<button onClick={validateInput}>Añadir</button>
			</div>

			<br />
			<div className="text-center">
				<ul className="list-group">
					{list.map((item, index) => (
						<li key={index} class="list-group-item">
							{item}
							<button
								className="btn"
								onClick={() => eliminarInput(index)}>
								<i class="fas fa-minus-circle"></i>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
