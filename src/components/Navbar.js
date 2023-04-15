function Navbar() {
    return (
        <nav>
            <nav className="nav">
                <img 
                    src="github-mark.png" 
                    className="nav-logo"
                    alt="GitHub Logo"
                />
                <h3 className="nav-h3">DevOps with GitHub</h3>
                <a href="https://github.com/Ankinen/ict-projects" 
                    target="_blank"
                    className="link"
                >
                    GitHub Repo
                </a>
            </nav>
        </nav>
    )
};

export default Navbar