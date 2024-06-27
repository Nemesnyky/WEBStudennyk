import React from 'react';
import './Students.scss';

const students = [
  { name: 'Єгор Аветисян', initials: 'Є', color: 'brown' },
  { name: 'Іван Аксай', initials: 'А', color: 'red' },
  { name: 'Ангеліна Багнюк', initials: 'А', color: 'orange' },
  { name: 'Олександр Бажин', initials: 'О', color: 'blue' },
  { name: 'Євгенія Бажмаєва', initials: 'Є', color: 'green' },
  { name: 'Денис Белюга', initials: 'Д', color: 'cyan' },
  { name: 'Микита Блінховатов', initials: 'М', color: 'purple' },
  { name: 'Мирослав Бобіль', initials: 'М', color: 'gray' },
  { name: 'Владислав Веретегел', initials: 'В', color: 'orange' },
  { name: 'Боромир Войїштен', initials: 'Б', color: 'green' },
  { name: 'Федір Волік', initials: 'Ф', color: 'brown' },
  { name: 'Олександр Вяльцев', initials: 'О', color: 'blue' },
  { name: 'Михайло Гончар', initials: 'М', color: 'orange' },

];

export function Students() {
  return (
    <div className="students">
      <div className='StudentsWrapper'>
      <h2>К-25</h2>
      <p>63 студенти</p>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span className={`initials ${student.color}`}>{student.initials}</span>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


