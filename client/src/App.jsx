import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import Signin from './pages/Signin.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Createlisting from './pages/Createlisting.jsx';
import Updatelisting from './pages/Updatelisting.jsx';
import Listing from './pages/Listing.jsx';
import Search from './pages/Search.jsx';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<Signin/>}></Route>
     <Route path='sign-up' element={<Signup/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/listing/:listingId' element={<Listing/>}></Route>
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/create-listing' element={<Createlisting/>}></Route>
      <Route path='/update-listing/:listingId' element={<Updatelisting/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>

  )
}

