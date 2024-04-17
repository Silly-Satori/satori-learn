import React from 'react'
import { useParams } from 'react-router-dom'

function viewCourse() {
    // get id from url :id
    const { id } = useParams();
    return (
        <div>
            <h1>View Course</h1>
            <p>Course ID: {id}</p>
        </div>
    )
}

export default viewCourse
