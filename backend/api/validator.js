function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new Error('E-mail inválido.');
	}
}

function validatePhone(phone) {
	const phoneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/; // Padrão (XX) 9XXXX-XXXX : Brasil
	if (!phoneRegex.test(phone)) {
		throw new Error('Número de telefone inválido.');
	}
}

function validateContent(content) {
	if (content.length < 100) {
		throw new Error('O conteúdo deve ter pelo menos 100 caracteres.');
	}
}