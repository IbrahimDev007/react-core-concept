import "./App.css";

function App() {
  const products=[
    {name:'laptop',price:203333, id:1},
    {name:'phone',price:40000 ,id:2},
    {name:'wath',price:50000 ,id:3},
    {name:'tablet',price:9000,id:4}
  ]
	return (
		<div >
			{ products.map(({name,price,id})=><Product key={id} name={name} price={price}/>)}
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
