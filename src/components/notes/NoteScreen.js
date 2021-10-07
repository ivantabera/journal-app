import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes_main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

            </div>

            <div className="notes__image">
                <img 
                    src="https://img.vixdata.io/pd/webp-large/es/sites/default/files/l/los_momentos_en_los_que_vegeta_lloro.jpg"
                    alt="imagen"
                />
            </div>

        </div>
    )
}
