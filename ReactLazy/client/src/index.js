import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"

//Components
import App from './App';

//Loading Page

import Loading from "./components/Loading/Loading"
import { Suspense } from 'react';

ReactDOM.render(<Suspense fallback={<Loading/>}><Router><App /></Router></Suspense>,document.getElementById('root'));