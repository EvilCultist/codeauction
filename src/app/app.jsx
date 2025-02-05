import './app.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Enter Login Details</h1>
                <h3>you recieved these when registering</h3>
            </header>
            <div className="App-body">
                {/*<form onSubmit={handleSubmit}>*/}
                <h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password"/>
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </h2>
            </div>
        </div>
    );
}

export default App;
