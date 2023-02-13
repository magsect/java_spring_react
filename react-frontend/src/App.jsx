import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div>
      <header className="App-header"></header>

      <main className="container">
        <ListEmployeeComponent />

        {/* @TODO: delete me */}
        <div className="card mt-4" style={{ width: "18rem" }}>
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
