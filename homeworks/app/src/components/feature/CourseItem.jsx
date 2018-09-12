import React from "react";
import "../../styles/courseItem.css"

class CourseItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="course-item-container">
          <div className="course-info-item-container">
            <span id="Caption" className="course-info-item">Caption</span>
            <span id="Duration" className="course-info-item">Duration</span>
            <span id="Date" className="course-info-item">Date</span>
            <span id="Description" className="course-info-item">Description</span>
          </div>
          <div className="controls-item-container">
            <button id="EditCourse" className="control-item">Edit course</button>
            <button id="DeleteCourse" className="control-item">Delete course</button>
           </div>
      </div>
    );
  }
}
  
export default CourseItem;