function SongSongBox(opp) {
  return (
    <div className="ml-10 card p-1 bg-neutral w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Cơ chế song song</h2>
        <p>{opp.statusSS}</p>
        <textarea className="textarea textarea-success h-40" readOnly={true} value={opp.textSongSong} placeholder=""></textarea>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Copy</button>
        </div>
      </div>
    </div>
  );
}
export default SongSongBox;
