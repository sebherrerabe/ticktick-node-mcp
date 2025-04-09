import dotenv from 'dotenv';
dotenv.config();

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// Create server instance
const server = new McpServer({
  name: "ticktick-node-mcp",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
  port: process.env.MCP_SERVER_PORT,
});