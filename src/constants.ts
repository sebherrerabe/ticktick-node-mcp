export const TICKTICK_BASE_URL = "https://ticktick.com";
export const TICKTICK_API_URL = `${TICKTICK_BASE_URL}/open/v1`;
export const TICKTICK_OAUTH_URL = `${TICKTICK_BASE_URL}/oauth`;
export const TICKTICK_OAUTH_AUTHORIZE_URL = `${TICKTICK_OAUTH_URL}/authorize`;
export const TICKTICK_OAUTH_TOKEN_URL = `${TICKTICK_OAUTH_URL}/token`;
export const USER_AGENT = "ticktick-node-mcp/1.0";

const HOST = process.env.MCP_SERVER_HOST || "localhost";
const PORT = process.env.MCP_SERVER_PORT || 8000;
export const OAUTH_REDIRECT_URI = `http://${HOST}:${PORT}/oauth/callback`;
