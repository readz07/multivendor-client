import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignInSocial = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }
    return (
        <div class="flex flex-col w-full border-opacity-50">
            <div class="divider">OR</div>
            <button className='btn background-red-400 btn-bloc' onClick={() => signInWithGoogle()}>Using Google</button>
        </div>
    );
};

export default SignInSocial;