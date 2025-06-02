import joshPhoto from "./assets/Josh.jpg"
import "./App.css";

function App() {
  return (
    <>
      <img src={joshPhoto} className='josh' alt="Josh" />
      <div>In celebration of the life of...</div>
      <h1>Josh van Erpers Roijaards</h1>
      <div className="card">
        <h2>Links:</h2>
        <ul>
          <li><a href="https://youtu.be/H3LyqeGIsDQ" target="_blank">Josh's celebration service</a></li>
          <li><a href="https://youtu.be/T5JX38bePOU " target="_blank">Josh's slideshow</a></li>
          <li><a href="https://youtu.be/RFPfmeqVgLc?feature=shared" target="_blank">Part of a haka for Josh</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
