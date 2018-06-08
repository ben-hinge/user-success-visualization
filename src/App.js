import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Map lat={39.8333333} lng={-98.585522} zoom={5}/>
            </div>
        );
    }
}
export default App
