import React, { useEffect, useState } from 'react';
import { apiConfig } from '../apiconfig';
import { ListItem } from './ListItem';
import NoteModal from './NoteModal';

export const NotesListPages = () => {
    const [notes, setNotes] = useState([]);
    const [noteCount, setNoteCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchNotesData = async () => {
        try {
            const [notesResponse, countResponse] = await Promise.all([
                apiConfig.get('/notes'),
                apiConfig.get('/notes/count'),
            ]);

            setNotes(notesResponse.data);
            setNoteCount(countResponse.data.note_count);
        } catch (error) {
            console.error('Error fetching notes data:', error);
        }
    };

    const handleCreateNote = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleNoteSave = () => {
        fetchNotesData();
    };

    useEffect(() => {
        fetchNotesData();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold"> &#x1F4D3; Notes</p>
                <p className="ml-2 text-lg font-semibold">{noteCount}</p>
            </div>
            <div>
                {notes.map((note, index) => (
                    <ul key={note.id}>
                        <li className="px-2 py-3 bg-gray-700 my-2 rounded-lg shadow-sm shadow-gray-500">
                            <ListItem key={index} note={note} />
                        </li>
                    </ul>
                ))}
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleCreateNote}
                    className="text-sm mt-2 px-2 py-1 bg-green-500 text-white rounded-3xl"
                >
                    Create Note
                </button>
            </div>

            <NoteModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSave={handleNoteSave}
            />
        </div>
    );
};
