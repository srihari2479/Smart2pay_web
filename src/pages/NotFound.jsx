import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EEF2F6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 pt-32 pb-24 text-center">
        <div className="max-w-md w-full neu-raised-lg p-8 sm:p-12 bg-white border border-white/90">
          <span className="text-6xl font-extrabold font-mono gradient-text-blue block mb-4">
            404
          </span>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Page Not Found</h1>
          <p className="text-sm text-[#64748B] mb-8">
            The requested payment route or resource does not exist or has been moved to another ledger node.
          </p>

          <Link to="/">
            <Button variant="primary" size="md" icon={Home} className="w-full justify-center">
              Return to Smart2Pay
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
