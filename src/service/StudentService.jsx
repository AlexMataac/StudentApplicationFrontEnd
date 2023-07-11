import axios from 'axios';

const STUDENT_BASE_REST_API_URL = 'http://localhost:8081/students'

class StudentService {
    
    getAllStudentsInformation(student) {
        return axios.get(STUDENT_BASE_REST_API_URL, student);
    }
    getStudentById(studentId) {
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }
    createStudent(student) {
        return axios.post(STUDENT_BASE_REST_API_URL, student);
    }
    updateStudent(studentId, student) {
        return axios.put(STUDENT_BASE_REST_API_URL + '/' + studentId, student);
    }
    deleteStudent(studentId) {
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + studentId);
    }
}

export default new StudentService();