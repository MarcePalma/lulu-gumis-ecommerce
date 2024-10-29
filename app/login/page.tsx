'use client';
import { useState } from 'react';
import { useUser } from '../userContext/userContext';

export default function LoginPage() {
    const [inputToken, setInputToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { login } = useUser();

    
    const AUTH_TOKEN = process.env.AUTH_TOKEN;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputToken) {
            if (inputToken === AUTH_TOKEN) {
                login(inputToken);
                setSuccessMessage('¡Sesión iniciada correctamente!');
                setErrorMessage('');
            } else {
                setErrorMessage('Token incorrecto. Intenta de nuevo.');
                setSuccessMessage('');
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleLogin} className='max-w-md mx-auto mt-20 p-8 border border-pink-300 rounded-lg shadow-md bg-pink-50'>
                <h2 className='block text-sm font-medium text-pink-700'>Iniciar Sesión</h2>
                <div className="mb-4">
                    <label htmlFor="token" className="block text-sm font-medium text-gray-700">Token</label>
                    <input
                        type="text"
                        id="token"
                        value={inputToken}
                        onChange={(e) => setInputToken(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button type="submit" className='w-full p-3 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition'>Iniciar Sesión</button>
            </form>
            <div className="mt-4 text-center">
                {successMessage && (
                    <div className="text-green-600">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="text-red-600">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}