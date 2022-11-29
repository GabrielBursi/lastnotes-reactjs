import Header from "./components/Header/Header";
import NotesArea from "./components/NotesArea/NotesArea";
import DestaqueProvider from "./context/DestaqueContext";

function App() {
  return (
    <DestaqueProvider>
      <Header/>
      <div className="cont-body">
        <NotesArea/>
      </div>
    </DestaqueProvider>
  );
}

export default App;
