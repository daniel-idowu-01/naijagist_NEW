import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Content from './components/Content';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { LoginProvider } from './data/context/LoginContext';
import { SidebarProvider } from './data/context/SidebarContext';

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
          <section className='flex'>
            <LeftBar />
            <Content />
            <RightBar />
            <Routes>
              <Route path='/login' element={ <Login /> } />
              <Route path='/sign-up' element={ <SignUp /> } />
            </Routes>           
          </section>
        </LoginProvider>
      </SidebarProvider>

       <button
       onClick={scrollToTop}
       className={scrollToTopStyle}>Up</button>
        
    </div>
  );
}

export default App;
