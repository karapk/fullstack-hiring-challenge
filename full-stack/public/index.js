const fetchUsersButton = document.querySelector('#fetchUsers');
const outputElement = document.querySelector('#usersOutput');
const maxUsersElement = document.querySelector('#maxUsers');

async function getUsers() {
	outputElement.textContent = 'Loading...';

	const fetchURL = new URL('/api/users', window.location.origin);
	fetchURL.searchParams.set('maxUsers', maxUsersElement.value);

	try {
		const response = await fetch(fetchURL.href);
		if (!response.ok) { throw new Error('Network response was not ok'); }
		const usersJson = await response.json();

		const userItems = usersJson.map(user => `<li>${user.name.title} ${user.name.first} ${user.name.last}</li>`).join('');
		outputElement.innerHTML = `<ul>${userItems}</ul>`;
	} catch (error) {
		outputElement.textContent = `Error: ${error.message}`;
	}
}

fetchUsersButton.addEventListener('click', getUsers);
