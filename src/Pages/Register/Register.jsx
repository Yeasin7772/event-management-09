import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";


const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const navigate = useNavigate()

    const { createUser, handleUpdateProfile } = useContext(AuthContext)

    const handelRegister = (e) => {
        e.preventDefault()
        const image = e.target.image.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value

        console.log(name, email, password);

        setRegisterError('')
        setRegisterSuccess('')

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters or longer')
            return
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should not contain special characters.')
            return
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
                handleUpdateProfile(name, image)
                    .then(() => {
                        setRegisterSuccess('User created successfully.')


                    })

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.messages)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                        <p className="py-6">At One love we are delighted to have you back! Access your account quickly and securely through our user-friendly login page. Whether you're a returning member or a first-time visitor, our login process is designed to make your experience as smooth as possible.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" required type="text" placeholder="Enter You Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="image" required type="Image URL" placeholder="Image URL" className="input input-bordered" />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#E527B2]">Register</button>
                            </div>

                            <p>Already Have An Account ? <Link className="text-[#F75B5F]" to='/login'>Login</Link></p>
                        </form>

                        <div className="text-center">
                            {
                                registerError && <p className="text-red-500">{registerError}</p>
                            }
                            {
                                registerSuccess && <p className="text-green-500">{registerSuccess}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;