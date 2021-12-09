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
				<ul>
					{list.map((item, index) => (
						<li key={index}>
							{item}
							<button
								className="btn"
								onClick={() => eliminarInput(index)}>
								<i className="fas fa-trash-alt" />
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

//<button onClick={validateInput}>Añadir</button>
//{list.map((item, index) => (
//	<li key={index}>
//		<p>{item}</p>
//		<button onClick={eliminarInput(index)}>X</button>
//	</li>
//))}
export default Home;
