import './note.css'

function Note() {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Titulo</h5>
                <p className="card-text">
                    descrição 
                </p>
            </div>
        </div>
    );
}

export default Note;