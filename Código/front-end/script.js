document.getElementById('formularioCadas').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch('/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, cpf, telefone }),
        });

        const responseData = await response.json();
        document.getElementById('message').innerText = responseData.message;
        document.getElementById('formularioCadas').reset();

    } catch (error) {
        console.error('Houve um erro no enviou do formulário', error);
        document.getElementById('message').innerText = 'Houve um erro no enviou do formulário.';
    }
});
