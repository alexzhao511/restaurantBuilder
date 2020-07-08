import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class CpuEdit extends Component {
  constructor(props) {
      super(props);
      this.state = {
          label: "",
          description: "",
          core: "",
          price: "",
          speed: "",
          status: ""
      }
  }

  componentDidMount() {
      console.log(this.props);
      fetch(
          `http://localhost:8080/api/cpus/${this.props.match.params.id}`)
          .then(response => response.json())
          .then(response => {
          this.setState(response.result)
      })
  }

  handleFormSubmit = (event) => {
      event.preventDefault();

      let errors = [];
      if(!this.state.label){
          errors.push("Label is required");
      }

      if(!this.state.description){
          errors.push("Description is required");
      }

      if(!this.state.core){
          errors.push("Core is required");
      }

      if(!this.state.price){
          errors.push("Price is required");
      }
      else if(this.state.price<0){
          errors.push("Price must be a positive number");
      }

      if(!this.state.speed){
          errors.push("Speed is required");
      }


      if(errors.length){
          alert(errors.join("\n"))
      }
      else{
          fetch(`http://localhost:8080/api/cpus/${this.props.match.params.id}`,{
              method: "PUT",
              body: JSON.stringify(this.state),
              headers: {
                  "Content-Type": "application/json"
              }
          }).then(response => response.json()).then(response => {
              console.log(response);
              this.props.history.push(`/cpus`)
          })
      }
      }

      handleInputChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
      }

      render() {
      console.log('render', this.state);
      return(
          <form onSubmit={this.handleFormSubmit}>
              <div>
                  <label htmlFor="label">Label</label>
                  <input id="label" name="label" type="text" value={this.state.label} onChange={this.handleInputChange}/>
              </div>
              <div>
                  <label htmlFor="description">Description</label>
                  <input id="description" name="description" type="text" value={this.state.description} onChange={this.handleInputChange}/>
              </div>
              <div>
                  <label htmlFor="core">Core</label>
                  <input id="core" name="core" type="text" value={this.state.core} onChange={this.handleInputChange}/>
              </div>
              <div>
                  <label htmlFor="price">Price</label>
                  <input id="price" name="price" type="text" value={this.state.price} onChange={this.handleInputChange}/>
              </div>
              <div>
                  <label htmlFor="speed">Speed</label>
                  <input id="speed" name="speed" type="text" value={this.state.speed} onChange={this.handleInputChange}/>
              </div>
              <div>
                  <label htmlFor="status">Status</label>
                  <select id="status" name="status" type="text" value={this.state.status} onChange={this.handleInputChange}>
                      <option value={'Active'}>Active</option>
                      <option value={'Inactive'}>Inactive</option>
                  </select>
              </div>
              <button type={"submit"} className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
          </form>

      )
      }
  }

export default withRouter (CpuEdit);