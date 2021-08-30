import React, {Component} from 'react';
import './ListCourse.css';

class ListCourse extends Component{

    constructor(props){

        super(props);
        this.state={
            isEdit : false
        }

    }


    courseShow=(props)=>{
        
        return(
            <div className="course-list" >
                <div className="course-name">
                    <span>{this.props.course.courseName}</span>
                </div>
                <div className="course-actions">
                    <button  className ="edit-btn" onClick={()=> this.toggleState()}>Edit</button>
                    <button className ="delete-btn" onClick={()=> this.props.deleteCourse(this.props.course.id)}>Delete</button>

                </div>
            </div>
        
        

        ) 

    }
    
    updateCourse=(e)=>{

        e.preventDefault();
        this.props.editCourse(this.props.course.id , this.input.value );
        this.toggleState();


    }




    updateForm =() =>{

        return(
            <div className="update-course">
            <form onSubmit={this.updateCourse}>
            <input type="text" defaultValue={this.props.course.courseName} ref={(v) => this.input=v} />
            
            <button className="apdate-btn">Update</button>

            
            </form>
            </div>
        )
    }

    toggleState = () =>{

        const {isEdit}= this.state;
        this.setState({

            isEdit:!isEdit
        })
    }



    render() {

        const{isEdit} = this.state;
        


    
        
        return (

            <React.Fragment>

                {isEdit ? this.updateForm() : this.courseShow()}
            </React.Fragment>

            
                
                
                
                
                )
            


        

    

        }    
    
}



export default ListCourse;