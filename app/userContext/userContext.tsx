"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { UserContextType } from '../types/types';
import Link from 'next/link';

// Creamos el contexto del usuario
const UserContext = createContext<UserContextType | undefined>(undefined);

// Propiedades para el componente UserProvider
interface UserProviderProps {
    children: ReactNode;
}

// Componente proveedor del contexto del usuario
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [token, setTokenState] = useState<string | null>(null);

    // Cargar token de almacenamiento local cuando el componente se monta
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) setTokenState(storedToken);
    }, []);

    // Función para iniciar sesión y guardar el token
    const login = (newToken: string) => {
        localStorage.setItem('authToken', newToken);
        setTokenState(newToken);
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('authToken');
        setTokenState(null);
    };

    return (
        <UserContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para acceder al contexto del usuario
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe ser utilizado dentro de un UserProvider');
    }
    return context;
};

// Higher Order Component para proteger rutas
export function withAuth<T extends object>(Component: React.FC<T>) {
    return function AuthenticatedComponent(props: T) {
        const { isAuthenticated } = useUser();
        if (!isAuthenticated) {
            return (
                <div className="flex flex-col items-center justify-center h-screen">
                    <h2 className="text-lg font-bold text-red-500">Acceso Denegado</h2>
                    <p className="mt-2 text-gray-600">Por favor, vuelve al inicio.</p>
                    <Link
                        href={"/"}
                        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Ir al Inicio
                    </Link>
                </div>
            );
        }
        return <Component {...props} />;
    };
}
