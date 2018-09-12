import React from "react";
import "../../styles/page.css"

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      header: props.headertext ? props.headertext : ""
    }
  }

  render() {
    return (
        <div>
          <header>
            <div className="header-caption">{this.state.header}</div>
            <legend/>
          </header>
          <body>
              {this.props.children}
          </body>
          <footer>
            <legend/>
            <div><h4>All rights reserved!</h4></div>
            <div><h5>Follow us in instagram, facebook, twitter :)</h5></div>
            <div><h5>Copyright 2018</h5></div>
          </footer>
        </div>  
    );  
  }
}

export default Page;