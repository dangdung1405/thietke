import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';

class App extends Component {
  // "http://runecom02.runtime.vn/Uploads/shop2198/images/product/p35_large.jpg"
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      data: data
    }
  }



  render() {
    return (
      <div className="App">

        <div className="product">
          <div className="header ">MV HOT </div>
          <div className="list">
            <div className="lidiv">
              <div className="li">
                <img src="https://avatar-nct.nixcdn.com/mv/2018/11/02/8/2/6/0/1541143152870_640.jpg"></img>
                <div className="text">Cho Em Thêm Một Lần <br></br> <strong>Kim Thành</strong></div>
                <div className="number">1:23</div>
                <div className="far fa-eye view" >28.234</div>
              </div>
              <div className="li">
                <img src="https://avatar-nct.nixcdn.com/mv/2018/11/02/8/2/6/0/1541143152870_640.jpg"></img>
                <div className="text">Cho Em Thêm Một Lần<br></br> <strong>Kim Thành</strong></div>
                <div className="number">3:23</div>
                <div className="far fa-eye view">28.234</div>

              </div>
              {this.state.data.map((obj, index) => {
                return <div className="tiny">
                  <div className="up">
                    <img src={obj.img}></img>
                    <div className="number1">{obj.min}</div>
                    <div className="far fa-eye view1">{obj.view * 2}</div>
                  </div>
                  <div className="down">
                    <h3>{obj.h3}</h3>
                    <h4>{obj.h4}</h4>

                  </div>
                </div>
              })}





            </div>
          </div>

        </div>
      </div >

    );
  }
}

export default App;
