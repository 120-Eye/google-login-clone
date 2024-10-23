document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.text();
        document.getElementById('responseMessage').innerText = result;

    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Error occurred during submission.';
        console.error('Error:', error);
    }
});
