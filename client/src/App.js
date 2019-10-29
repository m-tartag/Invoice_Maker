import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    bill_to: '',
    bill_to_email: '',
    client: '',
    location: '',
    date: '',
    start_time: '',
    end_time: '',
    rate: '',
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h4>Bill To:</h4>
          <input type="text" placeholder="Bill To" name="bill_to" onChange={this.handleChange}/>
          <input type="text" placeholder="E-mail" name="bill_to_email" onChange={this.handleChange} />
        </div>
        <div>
          <h4>Job Details:</h4>
        <input type="text" placeholder="Date" name="date" onChange={this.handleChange} />
        <input type="text" placeholder="Client" name="client" onChange={this.handleChange} />
        <input type="text" placeholder="Location" name="location" onChange={this.handleChange} />
        <input type="text" placeholder="Start Time" name="start_time" onChange={this.handleChange} />
        <input type="text" placeholder="End Time" name="end_time" onChange={this.handleChange} />
        <input type="text" placeholder="Rate" name="rate" onChange={this.handleChange} />
          </div>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
  
      </div>
    );
  }
}

export default App;
