import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import LoginPage from './pages/LoginPage.jsx';
// import SearchPage from './pages/SearchPage.jsx';
import CoursePage from './pages/CoursePage.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <LoginPage/> */}
        {/* <SearchPage/> */}
        <CoursePage/>
      </div>
    );
  }
}

export default App;
