const rows = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['⬆', 'z','x','c','v','b','n','m', '⬅'],
    [' ']];
    
const keysContainer = document.querySelector('.key-container');
window.addEventListener('DOMContentLoaded', () => {
    // Keys container
    for(let i=0; i<rows.length; i++){    
        // Create div for key wrapper
        const keys = document.createElement('div');
        keys.classList.add('keys');
        keysContainer.appendChild(keys);
        // Itterate character inside key wrapper
        let char = rows[i];
        
        for(let j=0; j<char.length; j++){
            // Create single input
            const input = document.createElement('input')
            input.setAttribute('type', 'button');
            input.setAttribute('value', `${char[j].toUpperCase()}`);
            // Append input to keys wrapper & container
            keys.appendChild(input);
            keysContainer.appendChild(keys);
        } 
    }
    
});




