import { useState } from 'react';

const GitHubUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí va el fetch
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                // Aquí se actualiza el estado con los datos recibidos
            });
    };

    return (
        <div>
            <h2>Buscar usuario de GitHub</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            {/* Aquí se mostrarán los datos del usuario si existen */}
            

        </div>
    );
};

export default GitHubUser;