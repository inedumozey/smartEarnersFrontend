<Nav bg={BRAND_COLOR_A}>
        <TopNav>
            <div className='top-nav-container'>
                <ul>
                    <li><Link href="https://facebook.com/smartearn" passHref><FacebookIcon fontSize="small"/></Link></li>
                    <li><Link href="https://twitter.com/smartearn" passHref><TwitterIcon fontSize="small"/></Link></li>
                    <li><Link href="https://instagram.com/smartearn" passHref><InstagramIcon fontSize="small"/></Link></li>
                </ul>

                <span>
                <Link href="mailto:admin@smartearn.com" passHref><p><EmailIcon fontSize="small"/></p></Link>
                    <p>admin@smartearn.com</p>
                
                </span>
                </div>
        </TopNav>

        <BottomNav bg={BRAND_COLOR_A}>
            <div  className='bottom-nav-container'>
                
                    <span className="logo">
                        <Link href='/' passHref><Image width='100' height='100' src={logo} alt="" /></Link>
                    </span> 
                    <div className="user">
                        {
                            check.isLoggedIn() ? 
                            (
                                <>
                                    <Link href='/dashboard' passHref>
                                        <Dashboard>Dashboard</Dashboard>
                                    </Link>
                                    <Link href='/signin' passHref>
                                        <UserAction onClick={()=>dispatch(logout())}>Logout</UserAction>
                                    </Link>
                                </>
                            ):
                            (
                                <ul className="bottom-nav-tabs">
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/user-manual'>How it works</Link></li>
                                    <li><Link href='/contact'>Plans</Link></li>

                                    <li><Link href='/signin'><button className='signin'>Sign in</button></Link>&nbsp;&nbsp;<Link href='/signup'><button className='signup'>Sign up</button></Link></li>

                                    <li></li>
                                </ul>
                            )
                        }
                    </div>
            </div>
        </BottomNav>
    </Nav>