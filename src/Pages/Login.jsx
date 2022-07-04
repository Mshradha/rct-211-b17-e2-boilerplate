// import React,{useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

// const Login = () => {
 
//   const [email, setEmail] = useState("eve.holt@reqres.in");
//   const [pass,setPass] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const coming = location.state?.from?.pathname || "/"

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if(email && pass) {
//     //   dispatch(({email,pass})).then((r) => {
//     //     navigate(coming ,{replace:true});
//     //   })
//     }
//   }

//   return (
//     <div>
//       <h2>LOGIN</h2>
//       <form onSubmit={handleSubmit}> 
//         <div>
//           <label>User Email</label>
//           <br />
//           <input data-cy="login-email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>User Password</label>
//           <br />
//           <input data-cy="login-password" type= "password" value={pass} onChange={(e) => setPass(e.target.value)}/>
//         </div>
//         <button type="submit" data-cy="login-submit">
//           Loading
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
