import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const {formValues, handleInputChange } = useForm( note );

    const { body, title } = formValues;

    return (
        <div className="notes_main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value= {title}
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value= {body}
                    onChange={ handleInputChange }
                ></textarea>

            </div>


            {   (note.url ) &&
                <div className="notes__image">
                    <img 
                        src="https://img.vixdata.io/pd/webp-large/es/sites/default/files/l/los_momentos_en_los_que_vegeta_lloro.jpg"
                        alt="imagen"
                    />
                </div>
            }

        </div>
    )
}
