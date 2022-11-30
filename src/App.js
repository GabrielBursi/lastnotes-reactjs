import Header from "./components/Header/Header";
import NotesArea from "./components/NotesArea/NotesArea";
import DestaqueProvider from "./context/DestaqueContext";
import NoteFormProvider from "./context/NoteFormContext";
import NoteListProvider from "./context/NoteListContext";

function App() {
  return (
    <>
    <Header />
      <div className="cont-body">
        <NoteListProvider>
          <NoteFormProvider>
              <DestaqueProvider>
                <NotesArea />
              </DestaqueProvider>
          </NoteFormProvider>
        </NoteListProvider>
      </div>
    </>
  );
}

export default App;
