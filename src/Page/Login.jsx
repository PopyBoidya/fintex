import  { useState } from 'react';
import { FaEnvelope, FaLock} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Login attempt with:', { email, password });
  
      // Fetch all user data from SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/nqegmplge76ah');
      const data = await response.json();
  
      // Check if email exists and the password matches
      const user = data.find((user) => user.email === email && user.password === password);
  
      if (user) {
        // Success: Login the user
        console.log('Login successful:', user);
  
        // Save user info (e.g., token) in localStorage for authentication
        localStorage.setItem('authToken', JSON.stringify({ email: user.email, id: user.id }));
  
        // SweetAlert success message
        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'Go to Dashboard',
        }).then(() => {
          // Redirect to the dashboard
          window.location.href = '/dashboard';
        });
      } else {
        // Error: User not found or invalid credentials
        Swal.fire({
          title: 'Invalid Credentials!',
          text: 'Email or password is incorrect. Please try again.',
          icon: 'error',
          confirmButtonText: 'Retry',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
  
      // SweetAlert error message
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue logging you in. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    };
 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-8">
          <p className="text-xs leading-5 text-gray-500">
            Dont have an account?{' '}
            <Link to='/signUp' className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
            <span> ----------- or ----------- </span>
            <Link to='/' className="font-medium text-green-600 hover:text-green-500">
              Go Back Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

