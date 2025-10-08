// pages/events.js
import Navigation from '@/components/Hero/navbar';
import EventsPage from '@/components/events/EventsPage'; // The new component
import Footer from '@/components/Footer';

export default function Events() {
  return (
    <div>
      <Navigation />
      <EventsPage />
      <Footer />
    </div>
  );
}