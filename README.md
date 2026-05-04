# Playwright Test Project

This project is a Playwright test suite for a dummy website. It demonstrates how to set up and run automated tests using Playwright.

## Getting Started

### Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-test-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers and tools:
   ```bash
   npx playwright install
   ```

### Playwright MCP Server

This repo is configured to use a Playwright MCP server for browser execution. The Playwright config connects to the MCP server instead of launching local browsers directly.

- Ensure your MCP server is running and reachable.
- Set the server endpoint using environment variables if needed, for example:
  ```powershell
  $env:PLAYWRIGHT_SERVER_WS = 'ws://127.0.0.1:PORT'
  npx playwright test
  ```

### Playwright Agents (Planner / Generator / Healer)

To initialize the Playwright agents for Copilot, run:

```bash
npx playwright init-agents --loop copilot --prompts
```

This will create the repository agent files and enable the planner, generator, and healer workflows for VS Code Copilot.

### Running Tests

To run the tests, use the following command:
```
npx playwright test
```

### Project Structure

- `tests/`: Contains the test specifications.
  - `example.spec.ts`: The main test file for the dummy website.
- `playwright.config.ts`: Configuration file for Playwright.
- `package.json`: npm configuration file with dependencies and scripts.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

### License

This project is licensed under the MIT License.