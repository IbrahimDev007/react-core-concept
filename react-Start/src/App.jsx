import "./App.css";

function App() {
  const products=[
    {name:'laptop',price:203333},
    {name:'phone',price:40000},
    {name:'wath',price:50000},
    {name:'tablet',price:9000}
  ]
	return (
		<div >
			{/* {products.map(({name,price})=><Product name={name} price={price}/>)} */}
		</div>
	);
}

const Product = ({name,price}) => {
	return (
		<div className ="product">
			<h3>Name:{name}</h3>
			<p>Price:{price}</p>
		</div>
	);
};

export default App;
