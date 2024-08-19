import React, { useState } from 'react';
import { apiConfig } from '../apiconfig';

const NoteModal = ({ isOpen, onClose, onSave }) => {
    const [title, setTitle] = useState('');

    const handleSave = async () => {
        if (title.trim() === '') return;

        try {
            const response = await apiConfig.post('/notes/', {
                title,
                body: "",
            });
            console.log('Note created successfully:', response.data);
            onSave();
            onClose();
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Create New Note</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="w-full p-2 border rounded-lg mb-4 text-black"
                />
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteModal;
