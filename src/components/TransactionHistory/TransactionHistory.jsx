export const TransactionHistory = ({ items }) => {
  // const { type, amount, currency } = items;
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
        {items.map(trans => {
          return (
            <tr>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          );
        })}
        ;
      </tbody>
      ;
    </table>
  );
};
