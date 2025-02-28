import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;