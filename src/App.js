//import logo from './logo.svg';
import './App.css';
//import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  let person = {Fname: "John", Lname: "Smith" };
  let person2 = {Fname: "Adam", Lname: "Smith" };
  let products =[
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.69'},
    {name:'PDF reader', price:'$40.99'},
  ]
  //const productNames = products.map(product=> product.name);
  //console.log(productNames);
  var style = {
    color: "red",
    backgroundColor: "white"
  }
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>
        {/* <Product productName = {products[0].name} price= {products[0].price}></Product>
        <Product productName = {products[1].name} price= {products[1].price}></Product>
        <Product productName = {products[2].name} price= {products[2].price}></Product> */}
        <ul>
        {products.map(product=> <li>{product.name}</li>)}
        </ul>
        

        {/* <Product productDetails ={products[0]}></Product>
        <Product productDetails ={products[1]}></Product>
        <Product productDetails ={products[2]}></Product> */}

        {products.map(pd=> <Product productDetails={pd}></Product>)}

      <Sperson name="Tamim Iqbal" feature="opener"></Sperson>
      <Sperson name="Mushfiq" feature="Wicket keeper"></Sperson>
        <h2 className="" style={style}>FullName: {person.Fname + " " + person.Lname}</h2>
        <h2 style={{ backgroundColor:"yellow", color:"red" }} >FullName: {person2.Fname + " " + person2.Lname}</h2>
        <p>MyFirst React Paragraph</p>
      </header>
    
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  },[]);
  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {users.map(user=> <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(10)
  const handleIncrease =() => setCount(count + 1);
    // const newCount = count + 1;
    // setCount(newCount);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )

}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color:"blue"
  }

  return(
    <div style={productStyle}>
      {/* <h3>{props.productName} </h3>
      <h5>{props.price}</h5> */}
      <h3>{props.productDetails.name}</h3>
      <h5>{props.productDetails.price}</h5>
      <button>Buy Now</button>

    </div>
  )
}

function Sperson(props){
  const spStyle = 
  {
    border:'3px solid yellow',
    margin:'10px',
    padding: '4px 10px'
  }
  return (
    <div style={spStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Role: {props.feature}</h3>
    </div>
  );
}

export default App;
