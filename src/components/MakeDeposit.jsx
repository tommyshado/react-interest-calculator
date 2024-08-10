import { Button } from 'react-bootstrap';

export default function MakeDeposit({ depositAmount, addDeposit, depositHandler }) {
  return (
    <div>
      <label htmlFor="makeDeposit"> Make a deposit : </label>
      <input
        type="number"
        id="makeDeposit"
        onChange={(e) => depositHandler(e.target.value)}
        value={depositAmount}
      />
      <Button variant="success" onClick={addDeposit}>
        Add Deposit
      </Button>
    </div>
  );
}
