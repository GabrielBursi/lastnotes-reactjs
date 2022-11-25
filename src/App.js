import Header from "./components/Header/Header";
import NotesArea from "./components/NotesArea/NotesArea";

function App() {
  return (
    <>
      <Header/>
      <div className="cont-body">
        <NotesArea/>
      </div>
    </>
  );
}

export default App;
