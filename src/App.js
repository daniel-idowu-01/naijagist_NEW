import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { LoginProvider } from './data/context/LoginContext';
import { SidebarProvider } from './data/context/SidebarContext';
import Login from './pages/Login';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import { FaArrowUp } from 'react-icons/fa'

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

  const scrollToTopStyle = 'bg-white border outline-none fixed bottom-10 right-10 rounded-full p-4 border  border-gray-600 text-gray-600'

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
        className={scrollToTopStyle}>
          <FaArrowUp />
      </button>
        
    </div>
  );
}

export default App;
