const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const libros = [
    'Los Secretos de la Estrategia Moderna en Ajedrez',
    'Ajedrez para Principiantes',
    'Los 100 Finales que hay que Saber',
    'La Táctica en el Ajedrez',
    'Eso no Estaba en mi Libro de Historia del Ajedrez',
    'Ajedrez y Psicología',
    'Estrategias de Apertura',
    'Ajedrez para Niños',
    'Grandes Maestros del Ajedrez',
    'Manual de Ajedrez Competitivo'
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    if (query) {
        const filteredLibros = libros.filter(libro => 
            libro.toLowerCase().includes(query)
        );
        filteredLibros.forEach(libro => {
            const li = document.createElement('li');
            li.textContent = libro;
            li.addEventListener('click', () => {
                searchInput.value = libro;
                suggestions.innerHTML = '';
                suggestions.style.display = 'none';
            });
            suggestions.appendChild(li);
        });
        suggestions.style.display = filteredLibros.length ? 'block' : 'none';
    } else {
        suggestions.style.display = 'none';
    }
});