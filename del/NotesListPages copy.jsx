import React, { useEffect, useState } from 'react'
import { apiConfig } from '../apiconfig'
import { ListItem } from './ListItem'

export const NotesListPages = () => {

    const [notes, setNotes] = useState([])
    const [noteCount, setNoteCount] = useState(0)

    const getNotes = async () => {
        try {
            const response = await apiConfig.get('/notes')

            setNotes(response.data)


        } catch (error) {
            console.error(error)
        }
    }

    const getCount = async () => {
        try {
            const response = await apiConfig.get('/notes/count')

            setNoteCount(response.data.note_count)

        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        console.log(noteCount)

        getCount();
        getNotes();
    }, [])

    return (
        <>
            <div>
                <div className='flex justify-end items-center'>
                    <span className='text-2xl text-red-500'> Notes</span>
                    <span>{noteCount}</span>
                </div>
                {notes.map((note) => (
                    <ListItem key={note.id} note={note} />
                ))
                }
            </div>
        </>
    )
}
