import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListStudent from './components/ListStudent';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ListStudent}></Route>
            <Route path='/students' component={ListStudent}></Route>
            <Route path='/add-student' component={AddStudent}></Route>
            <Route path='/edit-student/:id' component={AddStudent}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
