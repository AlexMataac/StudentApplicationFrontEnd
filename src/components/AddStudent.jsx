import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import StudentService from '../service/StudentService'

const AddStudent = () => {

    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [nationality, setNationality] = useState('')
    const [location, setLocation] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {
            firstName, middleName, lastName, email,
            age, gender, nationality, location, birthDate, phoneNumber
        }

        if (id) {
            StudentService.updateStudent(id, student).then((response) => {
                history.push('/students');
            }).catch(error => {
                console.log(error);
            })
        } else {
            StudentService.createStudent(student).then((response) => {
                console.log(response.data);
                history.push('/students');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        StudentService.getStudentById(id).then((response) => {
            setFirstName(response.data.firstName)
            setMiddleName(response.data.middleName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setAge(response.data.age)
            setGender(response.data.gender)
            setNationality(response.data.nationality)
            setLocation(response.data.location)
            setBirthDate(response.data.birthDate)
            setPhoneNumber(response.data.phoneNumber)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    // const addStudentClick = (e) => {
    //     console.log("click");
    // }

    const title = () => {
        if (id) {
            return <h2 className='text-center'> Update Student </h2>
        } else {
            return <h2 className='text-center'> Add Student </h2>
        }
    }
    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Middle Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Middle Name'
                                        name='middleName'
                                        className='form-control'
                                        value={middleName}
                                        onChange={(e) => setMiddleName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email: </label>
                                    <input
                                        type='email'
                                        placeholder='Enter your Email'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Age: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your Age'
                                        name='age'
                                        className='form-control'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Gender: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your Gender'
                                        name='gender'
                                        className='form-control'
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Nationality: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your nationality'
                                        name='nationality'
                                        className='form-control'
                                        value={nationality}
                                        onChange={(e) => setNationality(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Location: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your Location'
                                        name='location'
                                        className='form-control'
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Birth Date: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your BirthDate'
                                        name='birthDate'
                                        className='form-control'
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Phone Number: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter your Phone Number'
                                        name='phoneNumber'
                                        className='form-control'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className='btn btn-success' onClick={(e) => saveOrUpdateStudent(e)}> Submit </button>
                                <Link to="/students" className='btn btn-danger'> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
