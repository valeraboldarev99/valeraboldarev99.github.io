const element = React.createElement;

function App()
{
    return (
        <React.Fragment>
            <Header />
            <div className="page__content">
                <MainContent />
                <Sidebar />
            </div>
            <Footer />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('page'));