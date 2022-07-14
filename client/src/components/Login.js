import React from 'react'


function Login ({handleSubmit, setUserName, setPassword, }) {


  return (
    <div className='login-signup-container'>
      <h1>Welcome!</h1>
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
          <h2>Login:
          </h2>
          <label htmlFor="username">Username: </label>
          <input
            id='username'
            type='text'
            name='username'
            className='user-container'
            onChange={(e) => setUserName(e.target.value)}
          />
          <div>
            <label htmlFor="password">Password: </label>
              <input
                id="password"
                name="password"
                type="password"
                className='pw-container'
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className='signup-container'>
        <form>
          <h2>Sign-up:</h2>
          <label htmlFor="username">Username: </label>
          <input
            id='username'
            type='text'
            name='username'
            className='user-container'
          />
          <div>
            <label htmlFor="password">Password: </label>
              <input
                id="password"
                name="password"
                type="password"
                className='pw-container'
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    
  )
}

export default Login




// import { useState, useEffect } from 'react';
// import { useOutletContext, useNavigate } from 'react-router-dom';

// function Login() {
    
//     const [user, setUser] = useOutletContext();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//           // console.log("navigating to homepage")
//           navigate("/");
//         }
//       }, [user]);
  
//     function handleSubmit(e) {
//         e.preventDefault();
//         const user = {
//             username,
//             password,
//         };

//         fetch("/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ username, password}),
//           }).then((res) => {
//             if (res.ok) {
//               res.json().then((user) => {
//                 setUser(user);
//                 navigate('/home');
//             });
//             } else {
//               res.json().then((json) => setError(json.error, error));
//                 alert("Incorrect username or password.");
//             }
//         });
//     }

//   return (
//     <main>  
//         <div className="login-container-body">  
//             <div className="login-container">
//                 <div className="login-signup">
//                             <form onSubmit={handleSubmit} className="login-form">
                                
//                                 <input 
//                                         type="text" 
//                                         placeholder="username" 
//                                         id="username" value={username} 
//                                         onChange={(e) => setUsername(e.target.value)}>
//                                     </input>
//                                 <h2 className="title">Login</h2>
//                                 <div className="input-field">
//                                     <span className="fa-solid fa-user"></span>
//                                 </div>
                                
//                                 <input 
//                                         type="password" 
//                                         placeholder="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}>
//                                     </input>
//                                 <div className="input-field">
//                                     <span className="fa-solid fa-lock"></span>
//                                 </div>
//                                 <input type="submit"className="btn">Login</input>
//                                 {error ? <p>Error: {error}</p> : null}
//                             </form>

//                             <form action="" className="sign-up-form">
//                                 <h2 className="title">Sign Up</h2>
//                                 <div className="input-field">
//                                     <span className="fa-solid fa-user"></span>
//                                     <input type="text" placeholder="username"></input>
//                                 </div>
//                                 <div className="input-field">
//                                     <span className="fa-solid fa-lock"></span>
//                                     <input type="password" placeholder="password"></input>
//                                 </div>
//                                 <input type="submit" values="Sign Up" className="btn"></input>
//                             </form>
//                             {error ? <p>Error: {error}</p> : null}
//                         </div>
//                     {/* <div className="panels-container"></div>
//                         <div className="panel left-panel">
//                             <div className="content">
//                                 <h3>Already a Member? Login!</h3>
//                                 <button className="btn">Login</button>
//                             </div>
//                         </div>
//                         <div className="panel right-panel">
//                             <div className="content">
//                                 <h3>Want to Become a Member?</h3>
//                                 <button className="btn">Sign Up</button>
//                             </div>
//                         </div> */}
//                 </div>
//             </div>
//         </main>)
// }

// export default Login