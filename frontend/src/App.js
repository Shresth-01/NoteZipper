
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginPage from './screens/LoginScreen/LoginScreen';
import RegisterPage from './screens/RegisterScreen/RegisterScreen'
import CreateNote from './screens/SingleNote/CreateNote';
import SingleNote from './screens/SingleNote/SingleNote';
import { useState } from 'react';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Header setSearch={setSearch}/>
      <main >
      <Routes>
      <Route path="/" element={<LandingPage/>} exact />
      <Route path="/login" element={<LoginPage/>} exact/>
      <Route path="/profile" element={<ProfileScreen/>} exact/>
      <Route path="/register" element={< RegisterPage/>} exact/>
      <Route path="/createnote" element={< CreateNote/>} exact/>
      <Route path="/note/:id" element={< SingleNote/>} exact/>
      
      <Route path="/mynotes" element={<MyNotes search={search}/>} />
      </Routes>
      </main>
    <Footer/>
    </>
  );
}

export default App;
