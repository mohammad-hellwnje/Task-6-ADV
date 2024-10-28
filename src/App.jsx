import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store/index';
import Home from './Pages/Home/Home';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import './App.css';
import NewsLatters from './Pages/NewsLatters/NewsLatters';
function AppWrapper() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/newsletter" element={<NewsLatters/>} />
      </Routes>
    </>
  );
}

export default AppWrapper;
