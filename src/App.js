import React, { Component } from 'react';
import AddCourse from './Components/AddCourse/AddCourse';
import ListCourse from './Components/ListCourse/ListCourse';
import './App.css';
class App extends Component{

  constructor(props){

    super(props);
    this.state={
      courses:[
        
        { id: 1 , courseName: "HTML"},
        { id: 2 , courseName: 'CSS'}
      ],
      currentCourse:{
        id: '',
        courseName:''
      }

      
    }
  }


  enterCourse = (e) =>{

    this.setState({

      currentCourse:{
        id:Math.random(),
        courseName:e.target.value
      }
    })

  
  
  }

  
  addCourse = (e) =>{
    e.preventDefault();
  
    const newCourse= this.state.currentCourse;
    if(newCourse.courseName!==''){

      const newCourses =[...this.state.courses , newCourse];
      this.setState({
        courses:newCourses,
        currentCourse:{
          id:'',
          courseName:''
        }
      })
    }
  }

  

  
  deleteCourse=(id)=>{

    const filterCourses = this.state.courses.filter(course => course.id !== id);
    this.setState({

      courses:filterCourses
    })
  }

  editCourse = (id , value) =>{

    const {courses} = this.state;
    courses.map(course =>{

      if (course.id === id){

        course.courseName=value;
        this.setState({

          courses
        })
      }
    })

    
  }

  render(){

    const {courses} = this.state;
    let length = courses.length
    const courseList = length ? ( courses.map((course ) =>{

      return <ListCourse course={course} key={course.id} deleteCourse={this.deleteCourse}  editCourse={this.editCourse}  /> 
    })
    ):(<p className="message">No Courses To Show</p>)

    return(

      <React.Fragment>


        <div className="app">
        <h2>Add Course</h2>

        <AddCourse enterCourse={this.enterCourse} addCourse={this.addCourse} current={this.state.currentCourse}/>
        {courseList}

        </div>
      
      </React.Fragment>
    
      

      
      
    )
  }
}


export default App;
