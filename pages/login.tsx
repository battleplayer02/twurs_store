import React, { useState } from 'react'
import firebase from '../firebase';

export default function login() {
    // console.log(firebase);
    const auth = firebase.auth();
    const [user, setUser] = useState<null | any>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        try {
            console.log(email + "  " + password);
            setLoading(true)
            let res = await auth.signInWithEmailAndPassword(email, password);
            console.log(res.user);
            setUser(res.user);
            setLoading(false);
        }
        catch (e) {
            setError(e.message);
            setTimeout(() => {
                setError('')
            }, 2000)
            setLoading(false)
        }
        setPassword('')
        setEmail('')
    }
    const handleSignOut = async () => {
        try {
            setLoading(true);
            let res = await auth.signOut();
            console.log(res);
            setUser(null);
            setLoading(false)
        }
        catch (e) {
            setError(e.message);
            setTimeout(() => {
                setError('')
            }, 2000)
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <h1>Please Wait.....Loading</h1> : user == null ?
                <div className="flex flex-col items-center justify-center p-4 md:px-80">
                    <header >
                        <h1 className="text-2xl text-center text-indigo-700 hover:underline ">
                            Login
                        </h1>
                    </header>
                    <form className="w-full ">
                        <div>
                            <label htmlFor="username" className={"block mb-2 text-indigo-500"}>
                                Email:
                            </label>
                            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="username" type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className={"block mb-2 text-indigo-500"}>
                                Password:
                            </label>
                            <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="password" type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button className="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-gray-700" onClick={handleSubmit}>Sign In</button>
                        </div>
                        {error ? <h1>{error}</h1> : <></>}
                        <footer>
                            <a className="float-left text-sm text-indigo-700 hover:text-pink-700" href="#">Create Account?</a>
                        </footer>
                    </form>
                </div> :
                <>
                    <h2>{user.uid} is Signed In </h2>
                    <button onClick={handleSignOut} >Sign Out</button>
                </>
            }
        </>
    )

}
