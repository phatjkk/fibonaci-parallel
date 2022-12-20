function TuanTuBox(opp) {
  return (
    <div className="card p-1 bg-neutral w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Cơ chế tuần tự</h2>
        <p>{opp.statusTT}</p>
        <textarea className="textarea textarea-error h-40" readOnly={true} placeholder="" value={opp.textTuanTu}></textarea>
        <div className="card-actions justify-end">
          <button className="btn btn-error">Copy</button>
        </div>
      </div>
    </div>
  );
}
export default TuanTuBox;
