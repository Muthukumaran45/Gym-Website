import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home'
import Pricing from './pricing';
import Contact from './contact';



export default function Router() {
    return ( 
        <>
            <BrowserRouter>

                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">

                        <Link className="navbar-brand" id='navbar_brand' to='/'>
                            <img className='img-fluid' src="./images/nav_icon.jpg" alt="nav-icon" width="55" height="35" />Muscle Beast 
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <ul className="navbar-nav  me-auto mt-2 mb-md-0">
                                    <li className="nav-item"><Link className='nav-link active home_nav mb-2' to='/' >Home</Link></li>
                                    <li className="nav-item"><Link className='nav-link active pricing_nav mb-2' to='/pricing'>Pricing</Link></li>
                                    <li className="nav-item"><Link className='nav-link active contact_nav' to='/contact'>Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />

                </Routes>

            </BrowserRouter>

        </>
    );
}