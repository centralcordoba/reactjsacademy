import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car1 Insurance", amount: 294.97, date: new Date(2021, 2, 28) },
    { title: "Bike Insurance", amount: 300.97, date: new Date(2021, 2, 28) },
    { title: "Bus Insurance", amount: 200.97, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <h2>Let' get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
