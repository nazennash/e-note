import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiConfig } from '../apiconfig';

export const NotePage = () => {
    const { noteId } = useParams();
    const [note, setNote] = useState({ body: '' });

    const getNote = async () => {
        try {
            const response = await apiConfig.get(`/notes/${noteId}`);
            setNote(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNote({
            ...note,
            body: e.target.value,
        });
    };

    const saveNote = async () => {
        try {
            await apiConfig.put(`/notes/${noteId}/`, { body: note.body });
            alert('Note updated successfully!');
        } catch (error) {
            console.error('Error updating note:', error);
        }
    };

    const deleteNote = async () => {
        try {
            await apiConfig.delete(`/notes/${noteId}/`);
            alert('Note deleted successfully!');
            window.location.href = '/';
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    useEffect(() => {
        getNote();
    }, []);

    return (
        <div>
            <div className='flex justify-between pt-1 '>
                <h1 className="text-xl font-bold mb-4">Edit Note</h1>
                <p className="mb-4">
                    <Link to='/' className='flex items-center'>
                        <span className='text-2xl'>&#x2190;</span>
                        Back
                    </Link>
                </p>
            </div>
            <textarea
                value={note.body}
                onChange={handleChange}
                className="w-full rounded-lg h-96 bg-gray-600 p-5 border-none"
            />
            <div className='flex justify-between'>
                <button
                    onClick={deleteNote}
                    className="w-1/2 mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                    Delete
                </button>

                <button
                    onClick={saveNote}
                    className="w-1/2 font-bold mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                    Save
                </button>
            </div>

        </div >
    );
};
