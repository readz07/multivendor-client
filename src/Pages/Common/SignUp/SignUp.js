import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SignInSocial from '../SignInSocial/SignInSocial';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 items-center">
                <div className=" mx-auto my-12">
                    <div className="text-center lg:text-left w-96">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provide your necessary information for registration</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("firstName", { required: true })} />
                                {errors.firstName?.type === 'required' && "First name is required"}

                                <input {...register("lastName", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}

                                <input {...register("mail", { required: "Email Address is required" })} />
                                <p>{errors.mail?.message}</p>

                                <input type="submit" />
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type your name here" className="input input-bordered" {...register("name", { required: true })}/>
                                    {errors.name?.type === 'required' && "First name is required"}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text" name='confirmpassword' placeholder="confirm password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        <span className="label-text-alt">Already a member? <Link to='/signin' className='link link-hover'>Sign In</Link></span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <SignInSocial />
                </div>
            </div>
        </div>
    );
};

export default SignUp;