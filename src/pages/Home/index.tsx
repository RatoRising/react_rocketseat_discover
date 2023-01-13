import React, { useState, useEffect, useReducer } from 'react';
import './styles.css';
import { Card, CardProps } from '../../components/Card';

type ProfileResponse = {
	name: string;
	avatar_url: string;
};

type User = {
	name: string
	avatar: string
}

export function Home() {
	const [ studentName, setStudentName ] = useState('');
	const [ students, setStudents ] = useState<CardProps[]>([]);
	const [ user, setUser ] = useState<User>({} as User);

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

	// useEffect using async function recommended
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://api.github.com/users/ratorising');
			const data = (await response.json()) as ProfileResponse;
			
			setUser({
				name: data.name,
				avatar: data.avatar_url
			});
		}
		fetchData();
	}, []);

	/* // useEffect sinc
	useEffect(() => {
		fetch('https://api.github.com/users/ratorising')
		.then((response) => response.json())
		.then((data) => {
			setUser({
				name: data.name,
				avatar: data.avatar_url
			});
		});
	}, []); */

	return (
		<div className="container">
			<header>
				<h1>Presence List</h1>
				<div>
					<strong>{user.name}</strong>
					<img src={user.avatar} alt="github profile picture" />
				</div>
			</header>

			<input type="text" placeholder="Type your name..." onChange={(e) => setStudentName(e.target.value)} />
			<button type="button" onClick={handleAddStudents}>
				Add Student
			</button>

			{students.map((student) => <Card key={student.time} name={student.name} time={student.time} />)}
		</div>
	);
}

// Card key requested by react as a mandatory identifier
// export default Home;
