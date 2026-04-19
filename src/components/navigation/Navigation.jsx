const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="text-xl text-black no-underline p-4 transition-opacity duration-200 hover:opacity-80 hover:underline cursor-pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation