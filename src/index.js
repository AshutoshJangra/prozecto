import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from './components/modal/Modal'

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Modal />, document.getElementById("modal-root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
