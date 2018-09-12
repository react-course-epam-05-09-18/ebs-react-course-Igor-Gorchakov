import React from "react";
import {Image} from "react-bootstrap";
import logoImage from "../../images/courses-logo.jpeg";
import "../../styles/coursesLogo.css"

class CoursesLogo extends React.Component {
    render() {
        return (
            <div className="cources-logo-container">
                <div className="cources-logo-item logo-image">
                    <Image src={logoImage} />
                </div>
                <div className="cources-logo-item">
                    <a href="/logout">Logout</a>
                </div>
            </div>
        )
    }
}
  
export default CoursesLogo;