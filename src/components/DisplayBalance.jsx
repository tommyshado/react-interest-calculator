// Import the child components
import BankBalance from "./BankBalance";
import MakeDeposit from "./MakeDeposit";
import { useState } from "react";
import { Container } from "react-bootstrap";
import MakeWithdrawal from "./MakeWithdrawal";

export default function DisplayBalance() {
  // Bank balance state initialized at 0
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  // *************************** Handles Deposit ************************ //
  function depositHandler(deposit) {
    setDepositAmount(deposit);
  }
  function addDeposit() {
    if (depositAmount) {
      setBalance((prevBalance) => prevBalance + Number(depositAmount));
      setDepositAmount(0);
    }
  }
  // ************************** Handles Withdrawal ******************* //
  function withdrawHandler(amount) {
    setWithdrawAmount(amount);
  }
  function withdraw() {
    if (balance >= Number(withdrawAmount)) {
      setBalance((prevBalance) => prevBalance - Number(withdrawAmount));
      setWithdrawAmount(0);
    }
  }

  return (
    <Container className="d-flex justify-content-center">
      <div className="balance-component m-4">
        <BankBalance balance={balance.toFixed(2)} />
        <hr />
        <MakeDeposit
          depositAmount={depositAmount}
          addDeposit={addDeposit}
          depositHandler={depositHandler}
        />
        <hr />
        <MakeWithdrawal
          withdraw={withdraw}
          withdrawAmount={withdrawAmount}
          withdrawHandler={withdrawHandler}
        />
      </div>
    </Container>
  );
}
