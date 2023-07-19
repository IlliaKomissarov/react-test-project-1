import logo from './../../images/logo.png';

function Header() {
    return ( 
        <>
                <nav className='nav'>
                    <img src={logo} alt="logo" className='nav--icon' />
                    <h2 className='nav--logo_text'>ReactFacts</h2>
                    <h3 className='nav-title'>React Course - Project 1</h3>
                </nav>
        </>
     );
}

export default Header;