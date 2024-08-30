document.getElementById('chatbot-toggle').addEventListener('click', function() {
    var chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('chatbot-send').addEventListener('click', function() {
    var input = document.getElementById('chatbot-input').value;
    if (input.trim() === '') return;

    addMessage('You', input);
    document.getElementById('chatbot-input').value = '';

    // Simple chatbot response logic
    var response = getChatbotResponse(input);
    setTimeout(function() {
        addMessage('Bot', response);
    }, 500);
});

function addMessage(sender, message) {
    var messageElement = document.createElement('div');
    messageElement.textContent = sender + ': ' + message;
    document.getElementById('chatbot-messages').appendChild(messageElement);
    messageElement.scrollIntoView();
}

function getChatbotResponse(input) {
    input = input.toLowerCase();
    if (input.includes('venue')) {
        return 'You can explore our venues on the Venues page.';
    } else if (input.includes('catering')) {
        return 'We offer a variety of catering options tailored to your taste!';
    } else if (input.includes('pricing')) {
        return 'Check out our Pricing page for detailed packages.';
    } else if (input.includes('destination')) {
        return 'We have several beautiful destinations available!';
    } else {
        return 'I am here to help! You can ask about venues, catering, pricing, or destinations.';
    }
}
