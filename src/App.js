import Header from "./components/Header/Header";
import NotesArea from "./components/NotesArea/NotesArea";
import DestaqueProvider from "./context/DestaqueContext";
import NoteFormProvider from "./context/NoteFormContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <NoteListProvider>
        <NoteFormProvider>
          <DestaqueProvider>
            <Header />
            <div className="cont-body">
              <NotesArea />
            </div>
          </DestaqueProvider>
        </NoteFormProvider>
    </NoteListProvider>
  );
}

export default App;
