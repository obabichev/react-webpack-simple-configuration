import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

import {smartConsoleLog} from './source';

const _element = React.createElement("div", null,
    React.createElement("a", {href: "https://google.com"},
        React.createElement("h3", null, "Google")
    )
)

const element = <div>
    <a href="https://google.com">
        <h3>Google Link!</h3>
    </a>
</div>;

smartConsoleLog(element);
ReactDOM.render(element, document.getElementById("root"));