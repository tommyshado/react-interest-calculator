// This displays the user’s current bank balance.
export default function BankBalance({ balance }) {
  return (
    <div>
      <p>
        Your bank balance is <strong className="text-success">R {balance}</strong>
      </p>
    </div>
  );
}
