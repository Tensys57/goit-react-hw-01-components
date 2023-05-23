export const TransactionHistory = transactions => {
  const { type, amount, currency } = transactions;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </table>
  );
};
