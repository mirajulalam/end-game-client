import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
import PageNotfound from './Pages/Shared/PageNotfound';
import Calendar from './Pages/Calendar/Calendar';
import TodoList from './Pages/ToDoList/TodoList';
import Completed from './Pages/Completed/Completed';
import EditTask from './Pages/EditTask/EditTask';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
