import { TICKTICK_API_BASE, USER_AGENT } from "../constants.js";

export default async function makeRequest<T>(url: string) {
	const headers = {
		"User-Agent": USER_AGENT,
		Accept: "application/geo+json",
	};

	const finalUrl = new URL(`${TICKTICK_API_BASE}${url}`);

	try {
		const response = await fetch(finalUrl, { headers });
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return (await response.json()) as T;
	} catch (error) {
		console.error("Error making TickTick request:", error);
		return null;
	}
}
