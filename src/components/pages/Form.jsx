import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      date: new Date()
    }

    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setDate = this.setDate.bind(this);
    
  }

  // this.setState({})

  setName (e) {
    this.setState({
      name: e.target.value
    })
  }

  setEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  setDate() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario</h1>
        <h4>Fecha actual {Math.ceil(this.state.date/1000)} </h4>
        <form>
          <div className="ed-grid m-grid-2" id="elementoDidMount">
            <div className="form__item">
              <label>Nombre compleo</label>
              <input type="text" onChange={this.setName } />
            </div>
            <div className="form__item">
              <label>Correo electrónico</label>
              <input type="email" onChange={ this.setEmail }/>
            </div>
          </div>
        </form>
        <div>
          <h2> {`Hola ${this.state.name}`} </h2>
          <span> {`Tu correo es ${this.state.email}`} </span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let elemento = document.getElementById("elementoDidMount")
    console.log(elemento)

    this.intervalDate = setInterval(() => {
      this.setDate()
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps)
    //console.log(prevState)
  }

  componentWillUnmount() {
    clearInterval(this.intervalDate)
  }

}

export default Form;