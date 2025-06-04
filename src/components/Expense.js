import ExpenseItem from "./ExpenseItem";
const Expense = (props) =>{
    return(
        <div>
            <center>
            <h1>Display Expenses</h1>
            <div>{props.counter}</div>
        {props.expense.map((item,i)=>(
            <ExpenseItem
            date={item.date}
            title={item.title}
            amount={item.amount}
            key={i}/>
        ))}
            </center>
        </div>
    )
}
export  default Expense;