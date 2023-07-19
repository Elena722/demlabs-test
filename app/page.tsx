import Link from 'next/link';
import './landing.css';

export default function Home() {
  return (
    <main className='main-container'>
      <nav className="main-link">
      <Link href="/certificates">CERTIFICATES</Link>
      </nav>
    </main>
  )
}
