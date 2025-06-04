import './App.css';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense';
import React, { useState } from "react";
const App =() =>  {
  const DUMMY_EXPENSES =[
    {
      date:'12',
      title:'root',
      amount:'1200'
    },
    {
      date:'12',
      title:'root',
      amount:'1200'
  }
  ]
  const DUMMY_EXPENSE =[
    {
      date:'12',
      title:'root',
      amount:'1200'
    },
    {
      date:'12',
      title:'root',
      amount:'1200'
  }
  ]
  const [counter, setCounter] = useState(0)
  const[expense,setExpense]=useState(DUMMY_EXPENSES)
  const[newExpense,setnewExpense]=useState(DUMMY_EXPENSE)
  const handleClick1 = () => {
      setCounter(counter + 1)
  }
  const handleClick2 = () => {
      setCounter(counter - 1)
  }
    return (
      <div>
        <Expense counter={counter} expense= {expense}/>
         <NewExpense newExpense={newExpense}/>
         <div >
          <center>
          <h1>count:{counter}</h1>
          </center>
      </div>
      <div >
        <center>
          <button className="button1" onClick={handleClick1}>+</button>
          <button className="button2" onClick={handleClick2}>-</button>
          </center>
       </div>
      </div>
    );
  }
  export default App;
 
// import React,{useState} from "react"
// import Expense from "./components/Expense"
// import NewExpense from "./components/NewExpense"
// const App=()=>{
//   const DUMMY_EXPENSE=[
//     {
//       date:'12th nov',
//       title:'washing',
//       amount:400
//     },
//     {
//       date:'12th nov',
//       title:'washing',
//       amount:400
//     },
//     {
//       date:'12th nov',
//       title:'washing',
//       amount:400
//     },
//     {
//       date:'12th nov',
//       title:'washing',
//       amount:400
//     }
//   ]
//   const [counter,SetCounter]=useState(0)
//   const [expense,SetExpense]=useState(DUMMY_EXPENSE)
//   const incrementHandler=()=>{
//     SetCounter((prevState)=>{
//       return prevState+1
//     })
//   }
//   const decrementHandler=()=>{
//     SetCounter((prevState)=>{
//       return prevState-1
//     })
//   }
//   const addExpenseHandler=()=>{
//     const ExpenseList=['Expense Item 2','Expense Item 3']
//     SetExpense((prevState)=>{
//       return [...prevState,...ExpenseList]
//     })
//   }
//   return(
//     <div>
//       <center>
//         <button onClick={incrementHandler}>Increment</button>
//         {counter}
//         <button onClick={decrementHandler}>Decrement</button>
//         <div>
//           <h1>Expense List</h1>
//         </div>
//         <div>
//           <button onClick={addExpenseHandler}>Add Expenses</button>
//         </div>
//         <div>{expense}</div>
//         <Expense expense={expense}/>
//         <NewExpense />
//       </center>
//     </div>
//   )
// }
// export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
