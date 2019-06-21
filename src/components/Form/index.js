import React from 'react';
import { Component } from 'react';
import './Form.css';
import { connect } from 'react-redux';

import { addToWhiteList } from '../../store/actions';

class Form extends Component {
    state = {
      input: '',
    }
    
    handleInputChange = event => {
      const value = event.target.value;
      this.setState({input: value});
    }

    render = () => {
            
      return (
        <div className="form-container">
          <input 
            className="input"
            value={this.state.input}
            onChange={event => this.handleInputChange(event)}
          />
          <button 
            onClick={() => 
              this.props.dispatch(addToWhiteList(this.state.input))
            }
            class="button">
              To white list
          </button>
          <button 
            onClick={() => 
              this.props.dispatch(addToWhiteList(this.state.input))
            }
            class="button">
              To black list
          </button>
        </div>
      )
    }
  }

  export default connect()(Form);