import StudentList from './1-StudentList';
import { useState, useMemo } from 'react';

const STUDENTS = ['Budi', 'Ucup', 'Renday'];

export default function ListRendering() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  //   const filteredStudents = STUDENTS.filter((student) =>
  //     student.toLowerCase().includes(search.toLowerCase())
  //   );

  const filteredStudents = useMemo(() => {
    console.log('Filtering student');
    return STUDENTS.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari student"
      />

      <StudentList students={filteredStudents} />

      <hr />

      <p> Counter : {count}</p>
      <button onClick={() => setCount((data) => data + 1)}>+</button>
    </section>
  );
}
