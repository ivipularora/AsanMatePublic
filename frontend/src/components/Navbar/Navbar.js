import React, { useState } from 'react'
import './Navbar.css'
import { auth, fs } from '../../config/config';
import { BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ user}) => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/');
        })
    }
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignup(false)
    }
    const [showSignup, setShowSignup] = useState(false);

    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => {
        setShowSignup(true)
        setShowLogin(false)
    };
    const handleSignup = (e) => {
        e.preventDefault();


        auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password
            }).then(() => {
                setSuccessMsg('Signup Successful. Kindly Login!');
                setEmail('');
                setFullName('');
                setErrorMsg('');
                setPassword('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/');

                }, 2000)
            }).catch(error => setErrorMsg(error.message));
        }).catch((error) => {
            setErrorMsg(error.message)
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setSuccessMsg('Login Successful.You will now automatically be redirected.')
            setEmail('');

            setErrorMsg('');
            setPassword('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/');

            }, 1000)
        }).catch(error => setErrorMsg(error.message))
    }
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
  return (
      <div>  <div className='home-header'>
          <Link to='/'><h1 className='home-heading'>AsanaMate AI</h1></Link>
          <div className="navbar-links">
              <Link to='/'>
                  <button
                      className="btn "
                      id="home-btn"
                  >
                      Home
                  </button>

              </Link><Link to='/about'>
                  <button
                      className="btn "
                      id="about-btn"
                  >
                      About
                  </button>

              </Link>
              <Link to='/tutorials'>
                  <button
                      className="btn "
                      id="tutorials-btn"
                  >
                      Tutorials
                  </button>

              </Link>
              
              {!user && <>
                  <button className="login-btn" onClick={handleShowLogin}>
                      <h3 className='primarycart'>  <CgProfile /> </h3>
                      <h6 className='icon-text'>Login </h6>
                  </button>
                 
              </>}
              {user && <>
                  <button onClick={toggleDropdown}>
                      <div className='buttonsnew'>
                          <h3 className='primarycart'> <CgProfile size={25} /> </h3>
                          <h6 className='icon-text'>{user}</h6>
                      </div>
                  </button>
                  {showDropdown && (
                     
                          <button onClick={handleLogout}>
                              <div className='buttonsnew'>
                                  <h3 className='primarycart'> <BiLogOut size={25} /> </h3>
                                  <h6 className="icon-text">Logout</h6>
                              </div>
                          </button>
                     
                  )}
                  <Link to='/start'>
                      <button
                          className="btn explore-btn"
                      >Start Training</button>
                  </Link>
                 
              
              </>}

          </div>
          <Modal
              show={showLogin}
              onHide={handleCloseLogin}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Login Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {successMsg && <>
                      <div className="success-msg">
                          {successMsg}

                      </div>
                      <br></br>
                  </>}
                  <form className='forms' name='loginform' onSubmit={handleLogin}>
                      <div className='form-action'>
                          <label >Email Address</label>
                          <input className='input' type="email" placeholder='Enter Valid Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                      </div>
                      <div className='form-action'>
                          <label >Password</label>
                          <input className='input' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                      </div>

                      <h4 className='signuptext'>Don't have an account?<span className='signuplink' onClick={handleShowSignup}>  Sign up</span></h4>
                      <div className="buttonsspace">
                          <Button variant="primary" type='submit'>Submit</Button>
                          <Button variant="secondary" onClick={handleCloseLogin}>
                              Cancel
                          </Button>
                      </div>
                  </form>
                  {errorMsg && <>
                      <div className="error-msg">
                          {errorMsg}

                      </div>
                      <br></br>
                  </>}
              </Modal.Body>

          </Modal>
          <Modal
              show={showSignup}
              onHide={handleCloseSignup}
              backdrop="static"
              keyboard={false}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Signup Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {successMsg && <>
                      <div className="success-msg">
                          {successMsg}

                      </div>
                      <br></br>
                  </>}
                  <form action="" autoComplete='off' onSubmit={handleSignup}>
                      <div className='form-action'>
                          <label htmlFor="">Full Name</label>
                          <input className='input' type="text" placeholder='Enter Full Name' onChange={(e) => setFullName(e.target.value)} value={fullName} required />
                      </div>
                      <div className='form-action'>
                          <label htmlFor="">Email Address</label>
                          <input className='input' type="email" placeholder='Enter Valid Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                      </div>
                      <div className='form-action'>
                          <label htmlFor="">Password</label>
                          <input className='input' type="text" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                      </div>
<div className="buttonsspace">  <Button variant="primary" type='submit'>Submit</Button>
                      <Button variant="secondary" onClick={handleShowLogin}>
                          Return to Login
                      </Button></div>
                    
                  </form>
                  {errorMsg && <>
                      <div className="error-msg">
                          {errorMsg}

                      </div>
                      <br></br>
                  </>}
              </Modal.Body>

          </Modal>

      </div></div>
  )
}

export default Navbar