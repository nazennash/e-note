import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiConfig } from '../apiconfig'

export const NotePage = () => {
    const { noteId } = useParams()
    const [note, setNote] = useState([])

    const getNote = async () => {
        try {
            const response = await apiConfig.get(`/notes/${noteId}`)

            setNote(response.data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getNote()
    }, [])


    return (
        <div>
            <textarea value={note.body} className='w-full rounded-lg h-96 bg-gray-600 p-5 border-none' />
        </div>
    )
}
