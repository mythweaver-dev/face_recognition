const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="text-xl text-black no-underline p-4 transition-opacity duration-200 hover:opacity-80 hover:underline cursor-pointer">Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="text-xl text-black no-underline p-4 transition-opacity duration-200 hover:opacity-80 hover:underline cursor-pointer">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="text-xl text-black no-underline p-4 transition-opacity duration-200 hover:opacity-80 hover:underline cursor-pointer">Register</p>
            </nav>
        )

    }
}

export default Navigation