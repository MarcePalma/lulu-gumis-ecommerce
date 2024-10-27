"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { UserContextType } from '../types/types';

// Creamos el contexto del usuario
const UserContext = createContext<UserContextType | undefined>(undefined);

// Propiedades para el componente UserProvider
interface UserProviderProps {
    children: ReactNode;
}

// Componente proveedor del contexto del usuario
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);

    // Cargar token de almacenamiento local cuando el componente se monta
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) setToken(storedToken);
    }, []);

    // Función para iniciar sesión y guardar el token
    const login = (newToken: string) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('authToken');
        setToken(null);
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
export function withAuth(Component: React.FC) {
    return function AuthenticatedComponent(props: any) {
        const { isAuthenticated } = useUser();
        if (!isAuthenticated) {
            return <div>No tienes acceso a esta página.</div>; // Puedes redirigir aquí
        }
        return <Component {...props} />;
    };
}
