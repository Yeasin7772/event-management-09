import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";


const Login = () => {

    const [match, setMatch] = useState('')

    const { login, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('this is location', location);


    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setMatch('password do no match')
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">At One love we are delighted to have you back! Access your account quickly and securely through our user-friendly login page. Whether you're a returning member or a first-time visitor, our login process is designed to make your experience as smooth as possible.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" required type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" required type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>

                            <p>Do not Have An Account ? <Link className="text-[#F75B5F]" to='/register'>Register</Link></p>
                        </form>

                        <div className="text-center">
                            {
                                match && <p className="text-red-500">{match}</p>
                            }
                        </div>

                        <div className="">
                            <button  onClick={() => googleLogin()} className="btn w-full">
                                <FaGoogle className="text-blue-700"></FaGoogle>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;