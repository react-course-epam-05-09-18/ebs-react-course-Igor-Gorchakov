import React from 'react';
import Page from '../components/common/Page.jsx';
import CourseLogo from '../components/feature/CourseLogo.jsx';
import Course from '../components/feature/Course.jsx';

class LoginPage extends React.Component {
  render() {
    return (
      <Page headertext="Course view">
        <CourseLogo/>
        <Course/>
      </Page>
    );
  }
}

export default LoginPage;
