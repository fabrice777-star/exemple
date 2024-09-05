import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'client', // Par défaut, le rôle est "client"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'inscription à ajouter ici
        console.log('Formulaire soumis:', formData);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Créer un compte</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Type de compte</label>
                    <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="client">Client</option>
                        <option value="cooperative">Cooperative</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Créer un compte</button>
            </form>
        </div>
    );
}

export default Signup;
