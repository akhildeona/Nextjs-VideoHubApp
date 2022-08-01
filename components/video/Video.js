import React, { Component,useState } from "react";
import s from "./video.module.css";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);


  }
 
    
  
  
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    console.log("name", this.state.name);
    console.log("email", this.state.email);
    console.log("File Name:" ,this.state.selectedFile.name);
    console.log("File type:" ,this.state.selectedFile.type);
    console.log("File size:" ,this.state.selectedFile.size);



    {
      this.state.name;
    }
    event.preventDefault();
  }
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
 

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          {/* <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>
          <p>file size:{this.state.selectedFile.size}</p> */}

          {/* <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p> */}
        </div>
      );
    } else {
      return (
        <div>
          <br />
        
        </div>
      );
    }
    
  };
  

  render() {
    return (
      <form className={s.mainbox} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={s.textbox1}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name*"
            required
          />
        </label>
        <br />
        <label>
          <input
            className={s.textbox2}
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Email*"
            required
          />
        </label>
        <br />

        {/*  */}

        <div>
          <input
            className={s.fileup}
            type="file"
            onChange={this.onFileChange}
          />
          {/* <button onClick={this.onFileUpload}>Upload!</button> */}
        </div>
        {this.fileData()}
        {/*  */}
        <div className={s.btnsubmit1}>
          <input className={s.btnsubmit} type="submit" value="Submit" />
        </div>

        
        
      </form>
    );
  }
}

export default Video;
