import React, { useState } from "react";
import axios from 'axios';

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://my-json-server.typicode.com/Lugesci/json-db/cursos/${this.props.match.params.id}`
      )
      .then((resp) => {
        this.setState({
          course: {...resp.data},
        })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="ed-grid m-grid-3">
        <h1>Curso: {this.state.course.titulo}</h1>
        <img className="m-cols-1" src={this.state.course.image} alt="Imagen" />
        <p className="m-cols-2">Descripcion</p>
      </div>
    );
  }
}

export default Course;
