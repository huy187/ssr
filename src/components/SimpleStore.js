import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getContract, getWeb3 } from '../tweb3.js';

class Message extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      curVal: 0,
      newVal: 0,
    };
  }
  async componentDidMount() {
    getContract()
      .methods.value()
      .call()
      .then((value) => {
        this.setState({ curVal: value });
      });
    // const curVal = await getContract().methods.value().call();
    // this.setState({ curVal });
  }

  onChangeValue = (event) => {
    const newVal = event.currentTarget.value.trim();
    console.log('onChangeValue', newVal);
    this.setState({ newVal });
  };

  setNewValue = async () => {
    const { newVal } = this.state;
    getWeb3().wallet.createAccount();
    await getContract().methods.setValue(Number(newVal)).sendAsync();
    console.log(newVal);
  };

  render() {
    const { curVal } = this.state;
    return (
      <div className="app-card app-center">
        <div className="app-link">
          <p>
            Current value: <span id="value">{curVal}</span>
          </p>
          <input id="newValue" placeholder="new value" onChange={this.onChangeValue} />
          <br />
          <button onClick={this.setNewValue}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Message;
