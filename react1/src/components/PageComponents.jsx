function Header()
{
    return (
        <header className="header" id="header">
            <div className="wrapper">
                <div className="header__inner">
                    <div className="logo">
                        <img src="src/img/logo.png" alt="logo"/>
                    </div>
                    <HeaderMenu />
                </div>
            </div>
        </header>
    );
}

function MainContent()
{
    return (
        <div className="main__content">
            <h1 className="main__content_header">Фильмы</h1>
            <MovieList />
        </div>
    );
}

function Footer()
{
    return (
        <footer className="footer" id="footer">
            <div className="wrapper">
                <FooterMenu />
            </div>
        </footer>
    );
}

function Sidebar()
{
    return (
        <div className="sidebar">
            <h3>Категории фильмов:</h3>
            <SidebarMenu />
        </div>
    );
}