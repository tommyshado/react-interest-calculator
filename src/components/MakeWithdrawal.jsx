import { Button } from "react-bootstrap";

export default function MakeWithdrawal({ withdrawAmount, withdrawHandler, withdraw }) {
  return (
    <div>
      <label htmlFor="withdraw"> Withdraw : </label>
      <input
        type="number"
        id="withdraw"
        onChange={(e) => withdrawHandler(e.target.value)}
        value={withdrawAmount}
      />
      <Button onClick={withdraw}>Withdraw</Button>
    </div>
  );
}
