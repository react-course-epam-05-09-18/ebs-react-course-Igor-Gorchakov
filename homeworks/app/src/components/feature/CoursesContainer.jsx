import React from "react";
// import { Row} from "react-bootstrap";
import CourseItem from "./CourseItem";
import "../../styles/coursesContainer.css"
class CoursesContainer extends React.Component {

  render() {
    return (
      <div className="courses-container">
          <div className="course-item">
            <CourseItem/>
          </div>
          <div className="course-item">
            <CourseItem/>
          </div>
          <div className="course-item">
            <CourseItem/>
          </div>
      </div>
    );
  }
}
  
export default CoursesContainer;