import React from 'react';
import Page from '../components/common/Page.jsx';
import CoursesLogo from '../components/feature/CoursesLogo.jsx';
import CoursesContainer from '../components/feature/CoursesContainer.jsx';
import SearchCoursesPanel from '../components/feature/SearchCoursesPanel.jsx';

class SearchPage extends React.Component {

  render() {
    return (
      <Page headertext="Courses">
        <CoursesLogo/>
        <SearchCoursesPanel/>
        <CoursesContainer/>
      </Page>
    );
  }
}

export default SearchPage;
