import React from "react";
import { Row, Image } from "react-bootstrap";
import logoImage from "../../images/login-logo.jpg";

class LoginLogo extends React.Component {
    render() {
        return (
            <div className="logo-image">
                <Image src={logoImage}/>
            </div>
        )
    }
}
  
export default LoginLogo;