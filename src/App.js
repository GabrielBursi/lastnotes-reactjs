import Header from "./components/Header/Header";
import NotesArea from "./components/NotesArea/NotesArea";
import DestaqueProvider from "./context/DestaqueContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <DestaqueProvider>
      <Header />
      <div className="cont-body">
        <NoteListProvider>
          <NotesArea />
        </NoteListProvider>
      </div>
    </DestaqueProvider>
  );
}

export default App;
