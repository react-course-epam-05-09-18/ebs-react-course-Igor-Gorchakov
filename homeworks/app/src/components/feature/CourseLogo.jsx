import React from "react";
import {Image} from "react-bootstrap";
import infoImage from "../../images/info.png";
import "../../styles/courseLogo.css"

class CourseLogo extends React.Component {
    render() {
        return (
            <div className="cource-logo-container">
                <div className="cource-logo-item logo-image">
                    <Image src={infoImage} />
                </div>

                <div className="cource-logo-item">
                    Course
                </div>
                
                <div className="cource-logo-item">
                    <a href="/logout">Logout</a>
                </div>
            </div>
        )
    }
}
  
export default CourseLogo;