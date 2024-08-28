export const onRequestGet: PagesFunction = async (context) => {
	const url = new URL(context.request.url);

	let maxUsers: number = 10;
	if (url.searchParams.has('maxUsers')) {
		maxUsers = Number.parseInt(url.searchParams.get('maxUsers') as string, 10);
	}

	maxUsers = Math.min(maxUsers, 100);

	try {
		const userRes = await fetch(`https://randomuser.me/api/?results=${maxUsers}`);

		if (!userRes.ok) {
			throw new Error('Failed to fetch users');
		}

		const userData = await userRes.json<{ results: Array<{ name: { title: string; first: string; last: string; }; }>; }>();

		return new Response(JSON.stringify(userData.results), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: (error as Error).message }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } },
		);
	}
};
