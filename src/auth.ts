// src/auth.ts
// This file will contain the logic for handling TickTick OAuth 2.0 authentication flow.
import crypto from "crypto";
import {
	TICKTICK_OAUTH_AUTHORIZE_URL,
	TICKTICK_OAUTH_TOKEN_URL,
	OAUTH_REDIRECT_URI,
} from "./constants.js";

// Retrieve credentials from environment variables
const clientId = process.env.TICKTICK_CLIENT_ID;
const clientSecret = process.env.TICKTICK_CLIENT_SECRET;

// In-memory store for the token and state (replace with more robust storage if needed)
let accessToken: string | null = null;
let refreshToken: string | null = null;
let tokenExpiry: Date | null = null;
let expectedState: string | null = null; // Store the state generated during auth initiation

// Basic validation
if (!clientId || !clientSecret) {
	console.error(
		"------------------------------------------------------\n" +
			"ERROR: TICKTICK_CLIENT_ID and TICKTICK_CLIENT_SECRET \n" +
			"must be set in the .env file in the root directory.\n" +
			"------------------------------------------------------"
	);
	// In a real app, you might want to throw an error or exit gracefully
	// For now, the functions below will check and handle the missing credentials.
}

function initSession() {}

// Placeholder functions - will be implemented next
export function initiateAuth(): string | null {
	if (!clientId) {
		console.error("Client ID not configured. Cannot initiate authentication.");
		return null; // Indicate failure due to missing config
	}

	// Generate a secure random state value and store it
	expectedState = crypto.randomBytes(16).toString("hex");

	const scopes = ["tasks:read", "tasks:write"]; // Define desired permissions
	const params = new URLSearchParams({
		client_id: clientId,
		scope: scopes.join(" "), // Scopes must be space-separated
		state: expectedState,
		redirect_uri: OAUTH_REDIRECT_URI,
		response_type: "code", // Standard for Authorization Code Grant
	});

	const authorizationUrl = `${TICKTICK_OAUTH_AUTHORIZE_URL}?${params.toString()}`;

	return authorizationUrl;
}

export async function handleCallback(
	code: string,
	state: string
): Promise<boolean> {
	// TODO: Implement
	return false;
}

export function getAccessToken(): string | null {
	// TODO: Implement
	return null;
}

export function isAuthenticated(): boolean {
	// TODO: Implement
	return false;
}
