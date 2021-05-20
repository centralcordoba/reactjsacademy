import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">March 28th 2011</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$298.44</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
