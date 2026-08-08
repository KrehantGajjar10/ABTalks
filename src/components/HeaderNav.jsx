import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link to="/">Landing</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/day/2">Challenge Day 2</Link>
      <Link to="/style-guide">Style Guide Sandbox</Link>
    </nav>
  );
}
