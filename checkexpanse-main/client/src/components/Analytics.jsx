import { Progress } from "antd";
import "../resources/analytics.scss";
function Analytics({ transactions }) {
    const totalTransactions = transactions.length;
    const totalIncomeTransactions = transactions.filter(
      (transaction) => transaction.type === "income"
    );
    const totalExpenseTransactions = transactions.filter(
      (transaction) => transaction.type === "expence"
    );
    const totalIncomeTransactionsPercentage =
      (totalIncomeTransactions.length / totalTransactions) * 100;
    const totalExpenseTransactionsPercentage =
      (totalExpenseTransactions.length / totalTransactions) * 100;
  
    //calculating turnover
    const totalTurnover = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  
    const totalIncomeTurnover = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  
    const totalExpenseTurnover = transactions
      .filter((transaction) => transaction.type === "expence")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  
    const totalIncomeTurnoverPercentage =
      (totalIncomeTurnover / totalTurnover) * 100;
  
    const totalExpenseTurnoverPercentage =
      (totalExpenseTurnover / totalTurnover) * 100;
  
      const categories = [
        "salary",
        "clothes",
        "freelance",
        "food",
        "travel",
        "investment",
        "education",
        "medicines",
        "tax",
        "entertainment",
        "groceries",
        "rent",
        "emi",
        "others"
      ]; 
  return (
<div className="analytics">
      <div className="r">
        <div className="col">
          <div className="transactions-count">
            <h4>Total Transactions : {totalTransactions}</h4>
            <hr />
            <h5>Income : {totalIncomeTransactions.length}</h5>
            <h5>Expense : {totalExpenseTransactions.length}</h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="#53BF9D"
                type="circle"
                percent={totalIncomeTransactionsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#F94C66"
                type="circle"
                percent={totalExpenseTransactionsPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="transactions-count">
            <h4>Total Turnover : {totalTurnover}</h4>
            <hr />
            <h5>Income : {totalIncomeTurnover}</h5>
            <h5>Expence : {totalExpenseTurnover}</h5>

            <div className="progress-bars">
              <Progress
                className="mx-5"
                strokeColor="#53BF9D"
                type="circle"
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#F94C66"
                type="circle"
                percent={totalExpenseTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="r">
        <div className="col">
          <div className="category-analysis">
            <h4>Income: Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#53BF9D"
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col">
          <div className="category-analysis">
            <h4>Expense: Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "expence" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#F94C66"
                      percent={((amount / totalExpenseTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics