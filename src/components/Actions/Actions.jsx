import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

import './actions.css'

function Actions() {
    return (
        <div className='cont-btn'>
            <button>
                <FaPlus className='icon'/>
            </button>
            <button>
                <FaPencilAlt className='icon disabled'/>
            </button>
            <button>    
                <FaTrash className='icon disabled'/>
            </button>
        </div>
    );
}

export default Actions;