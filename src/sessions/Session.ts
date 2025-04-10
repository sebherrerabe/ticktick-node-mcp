import crypto from "crypto";

class Session {
	private state: string;
	private token: string;
	private refreshToken: string | null;
	private tokenExpiry: Date | null;

	constructor() {
		this.state = crypto.randomBytes(16).toString("hex");
		this.token = "";
		this.refreshToken = null;
		this.tokenExpiry = null;
	}

	public getState(): string {
		return this.state;
	}

	public getToken(): string {
		return this.token;
	}

	public getRefreshToken(): string | null {
		return this.refreshToken;
	}

	public getTokenExpiry(): Date | null {
		return this.tokenExpiry;
	}

	public setToken(token: string): void {
		this.token = token;
	}

	public setRefreshToken(refreshToken: string): void {
		this.refreshToken = refreshToken;
	}

	public setTokenExpiry(tokenExpiry: Date | string): void {
		if (typeof tokenExpiry === "string") {
			this.tokenExpiry = new Date(tokenExpiry);
		} else {
			this.tokenExpiry = tokenExpiry;
		}
	}

	public isExpired(): boolean {
		if (!this.tokenExpiry) {
			return true;
		}
		return this.tokenExpiry.getTime() < Date.now();
	}

	public toJSON(): string {
		return JSON.stringify({
			state: this.state,
			token: this.token,
			refreshToken: this.refreshToken,
			tokenExpiry: this.tokenExpiry,
		});
	}

	public static fromJSON(json: string): Session {
		const data = JSON.parse(json);
		const session = new Session();
		session.state = data.state;
		session.token = data.token;
		session.refreshToken = data.refreshToken;
		session.tokenExpiry = data.tokenExpiry;
		return session;
	}
}

export default Session;
