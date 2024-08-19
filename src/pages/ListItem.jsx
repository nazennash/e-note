import React from 'react'
import { Link } from 'react-router-dom'
import { TiTick } from 'react-icons/ti';


export const ListItem = ({ note }) => {
    return (
        <>
            <Link to={`/${note.id}`}>
                <div className='flex items-center'>
                    <TiTick className="text-white mr-3" />
                    <span>{note.title}</span>
                </div>
            </Link >
        </>
    )
}
