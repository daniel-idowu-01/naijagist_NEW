import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { LoginProvider } from './data/context/LoginContext';
import { SidebarProvider } from './data/context/SidebarContext';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';

function App() {

  /* scroll to top action */
  const scrollToTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
  }

  const scrollToTopStyle = 'bg-white border outline-none fixed bottom-10 right-10 shadow-md rounded-full p-4'

  return (
    <div className="m-0 p-0 box-border montserrat">
      <SidebarProvider>
        <LoginProvider>
          <Nav />
            <Routes>
              <Route path='/' element={ <HomePage /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/sign-up' element={ <SignUp /> } />
              <Route path='/profile' element={ <Profile /> } />
            </Routes>
        </LoginProvider>
      </SidebarProvider>

       <button
       onClick={scrollToTop}
       className={scrollToTopStyle}>Up</button>
        
    </div>
  );
}

export default App;
