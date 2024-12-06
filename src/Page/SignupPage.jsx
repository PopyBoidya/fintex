import  { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userType = 'user';

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
       // Fetch existing data from SheetDB
    const response = await fetch('https://sheetdb.io/api/v1/w9vcgm2tt99n0');
    const existingData = await response.json();

    // Filter IDs starting with '#fintex'
    const fintexIds = existingData
      .map((entry) => entry.id) // Extract all IDs
      .filter((id) => id && id.startsWith('#fintex')) // Filter IDs with the '#fintex' prefix
      .map((id) => parseInt(id.replace('#fintex', ''), 10) || 0); // Extract numeric part

    // Find the highest number and increment it
    const lastNumber = fintexIds.length > 0 ? Math.max(...fintexIds) : 0;
    const newNumber = lastNumber + 1;

    // Create the new ID
    const newId = `#fintex${newNumber.toString().padStart(3, '0')}`; // e.g., #fintex001
  
      // Proceed with form submission if email doesn't exist
      const submitResponse = await fetch('https://sheetdb.io/api/v1/w9vcgm2tt99n0', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              id: newId, // Auto-increment ID
              name, // User-provided name
              email, // User-provided email
              password, // User-provided password
              userType, // Hardcoded or dynamic user type
            },
          ],
        }),
      });
  
      const submitData = await submitResponse.json();
      console.log(submitData);
  
      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Your data has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the login page
        window.location.href = '/dashboard';
      });
  
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
  
      // Show error alert
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue processing your request.',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-8">
          <p className="text-xs leading-5 text-gray-500">
            Already have an account?{' '}
            <Link to='/login' className="font-medium text-green-600 hover:text-green-500">
              Sign in  
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

export default SignupPage;

