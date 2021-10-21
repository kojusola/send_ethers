interface txList {
  txs?: any[];
}

export default function TxList({ txs }: txList) {
  if (txs?.length === 0) return null;

  return (
    <>
      {txs?.map((item, id) => (
        <div key={id} className="alert alert-info mt-5">
          <div className="flex-1">
            <label>{item.hash}</label>
          </div>
        </div>
      ))}
    </>
  );
}
