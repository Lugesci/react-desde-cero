import React from "react";
import axios from 'axios';

import CourseGrid from "../organisms/CourseGrid";

class Courses extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      courses: []
    }
  }

  componentDidMount () {
    axios.get('http://my-json-server.typicode.com/Lugesci/json-db/cursos')
      .then(resp => this.setState({
        courses: resp.data
      }));
  }
  
  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />;
  }
}

export default Courses;
