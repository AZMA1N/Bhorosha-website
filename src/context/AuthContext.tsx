import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
    id: string;
    username: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
    avatar?: string;
    phone?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => { success: boolean; message: string; role?: string };
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'bhorosha_auth_user';

// Hardcoded credentials
const USERS: { username: string; password: string; user: User }[] = [
    {
        username: 'karim',
        password: 'karim123',
        user: {
            id: 'user-001',
            username: 'karim',
            email: 'karim@example.com',
            name: 'Karim Ahmed',
            role: 'user',
            phone: '+880 1712-345678',
            avatar: 'KA'
        }
    },
    {
        username: 'rahim',
        password: 'rahim123',
        user: {
            id: 'user-002',
            username: 'rahim',
            email: 'rahim@example.com',
            name: 'Rahim Uddin',
            role: 'user',
            phone: '+880 1898-765432',
            avatar: 'RU'
        }
    },
    {
        username: 'admin',
        password: 'admin123',
        user: {
            id: 'admin-001',
            username: 'admin',
            email: 'admin@bhorosha.com',
            name: 'System Admin',
            role: 'admin',
            phone: '+880 1600-000000',
            avatar: 'AD'
        }
    }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch {
                    return null;
                }
            }
        }
        return null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(STORAGE_KEY);
        }
    }, [user]);

    const login = (username: string, password: string): { success: boolean; message: string; role?: string } => {
        const foundUser = USERS.find(
            u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
        );

        if (foundUser) {
            setUser(foundUser.user);
            return { 
                success: true, 
                message: `Welcome back, ${foundUser.user.name}!`,
                role: foundUser.user.role
            };
        }

        return { success: false, message: 'Invalid username or password' };
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Export credentials for reference (you can remove this in production)
export const CREDENTIALS = {
    users: [
        { username: 'karim', password: 'karim123' },
        { username: 'rahim', password: 'rahim123' },
    ],
    admin: { username: 'admin', password: 'admin123' }
};
