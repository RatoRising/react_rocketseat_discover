import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
	const [ studentName, setStudentName ] = useState('');
	const [ students, setStudents ] = useState([]);

	function handleAddStudents() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleTimeString('pt-br', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
		};
		setStudents((prevState) => [ ...prevState, newStudent ]);
	}

	return (
		<div className="container">
			<h1>Presence List</h1>

			<input type="text" placeholder="Type your name..." onChange={(e) => setStudentName(e.target.value)} />
			<button type="button" onClick={handleAddStudents}>
				Add Student
			</button>

			{students.map((student) => <Card name={student.name} time={student.time} />)}
		</div>
	);
}

// export default Home;
