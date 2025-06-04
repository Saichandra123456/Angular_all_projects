import React from 'react'
const ExpenseItem = (props) => {
  return (
    <div>
        <h3>Expensesitem</h3>
        <div>{props.counter}</div>
        <div>date:{props.date}</div>
        <div>title:{props.title}</div>
        <div>amount:{props.amount}</div>
        
        </div>
  )
}
export default ExpenseItem;