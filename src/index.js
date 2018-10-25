import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*///////
/////////jQuery Animations
///////*/
$(document).scroll(function() {
    var y = $(this).scrollTop()
    if (y > 300){
        $('.header').slideDown()
    } else {
        $('.header').slideUp()
    }
})
