import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../utils/constants';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${COLORS.background};
    color: ${COLORS.black};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    outline: none;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, ${COLORS.primaryGreen}, ${COLORS.darkGreen});
    color: ${COLORS.white};
    box-shadow: 0 4px 15px rgba(0, 200, 83, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 83, 0.4);
  }

  .btn-outline {
    background: transparent;
    color: ${COLORS.primaryGreen};
    border: 2px solid ${COLORS.primaryGreen};
  }

  .btn-outline:hover {
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
  }

  .card {
    background: ${COLORS.white};
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .text-center {
    text-align: center;
  }

  .mb-1 { margin-bottom: 8px; }
  .mb-2 { margin-bottom: 16px; }
  .mb-3 { margin-bottom: 24px; }
  .mb-4 { margin-bottom: 32px; }
  .mb-5 { margin-bottom: 40px; }

  .mt-1 { margin-top: 8px; }
  .mt-2 { margin-top: 16px; }
  .mt-3 { margin-top: 24px; }
  .mt-4 { margin-top: 32px; }
  .mt-5 { margin-top: 40px; }

  .loading-spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid ${COLORS.lightGrey};
    border-radius: 50%;
    border-top-color: ${COLORS.primaryGreen};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .error-message {
    color: ${COLORS.error};
    background: rgba(244, 67, 54, 0.1);
    padding: 12px 16px;
    border-radius: 8px;
    border-left: 4px solid ${COLORS.error};
  }

  .success-message {
    color: ${COLORS.success};
    background: rgba(76, 175, 80, 0.1);
    padding: 12px 16px;
    border-radius: 8px;
    border-left: 4px solid ${COLORS.success};
  }
`;
