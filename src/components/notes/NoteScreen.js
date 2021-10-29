import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes);
    const [ formValues , handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activId = useRef( note.id );

    useEffect(() => {

        if ( note.id !== activId.current ){
            reset( note );
            activId.current = note.id
        }

    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote(formValues.id, { ...formValues }) );
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }

    return (
        <div className="notes_main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value= {title}
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value= {body}
                    onChange={ handleInputChange }
                ></textarea>

            


                {   (note.url ) 
                        &&(
                            <div className="notes__image">
                                <img 
                                    src={note.url}
                                    alt="imagen"
                                    onChange={ handleInputChange }
                                />
                            </div>
                        )
                }
            </div>

            <button 
                className="btn btn-danger"
                onClick= { handleDelete }
            >
                Delete
            </button>
        </div>
    )
}
