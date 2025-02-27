import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router';
import App from './app/app';
import Dashboard from './app/dashboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                {/*<Route path="dashboard" element={<Dashboard/>}>*/}
                {/*    <Route index element={<RecentActivity/>}/>*/}
                {/*    <Route path="project/:id" element={<Project/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
