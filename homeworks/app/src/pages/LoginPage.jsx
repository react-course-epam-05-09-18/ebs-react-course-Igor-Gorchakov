import React from 'react';
import Page from '../components/common/Page.jsx';
import LoginForm from '../components/feature/LoginForm.jsx';
import LoginLogo from '../components/feature/LoginLogo.jsx';

class LoginPage extends React.Component {
  render() {
    return (
      <Page headertext="Login page">
        <LoginLogo/>
        <LoginForm/>
      </Page>
    );
  }
}

export default LoginPage;
