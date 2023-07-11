import React, { useEffect, useState } from 'react';
import StudentService from '../service/StudentService';
import { Link } from 'react-router-dom';

const ListStudent = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudentsInformation();
    }, [])

    const getAllStudentsInformation = (student) => {
        StudentService.getAllStudentsInformation(student).then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteStudent = (studentId) => {
        StudentService.deleteStudent(studentId).then((response) => {
            getAllStudentsInformation();
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'> Students Informations </h2>
        <Link to='/add-student' className='btn btn-primary mb-2'> Add Student </Link>
        <table className='table table-bordered table-striped table-hover'>
            <thead>
                <th> Student Id </th>
                <th> First Name </th>
                <th> Middle Name </th>
                <th> Last Name </th>
                <th> Email </th>
                <th> Age </th>
                <th> Gender </th>
                <th> Nationality </th>
                <th> Location </th>
                <th> Birth Date </th>
                <th> Phone Number </th>
                <th> Actions </th>
            </thead>
            <tbody>
                {
                    students.map(
                        student => 
                        <tr key={student.id}>
                            <td className='table-info'> {student.studentId} </td>
                            <td className='table-primary'> {student.firstName} </td>
                            <td className='table-secondary'> {student.middleName} </td>
                            <td className='table-success'> {student.lastName} </td>
                            <td className='table-danger'> {student.email} </td>
                            <td className='table-warning'> {student.age} </td>
                            <td className='table-info'> {student.gender} </td>
                            <td className='table-warning'> {student.nationality} </td>
                            <td className='table-light'> {student.location} </td>
                            <td className='table-dark'> {student.birthDate} </td>
                            <td className='table-primary'> {student.phoneNumber} </td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-student/${student.studentId}`}> Update </Link>
                                <button className='btn btn-danger' onClick={() => deleteStudent(student.studentId)}
                                style={{marginLeft: "10px"}}> Delete </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListStudent
