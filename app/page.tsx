import Navbar from '@/components/layouts/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AISearchSection from '@/components/home/AISearchSection';
import BookingSection from '@/components/home/BookingSection';
import LocalLogisticsSection from '@/components/home/LocalLogisticsSection';
import TouristGuidesSection from '@/components/home/TouristGuidesSection';
import CrowdIntelligenceSection from '@/components/home/CrowdIntelligenceSection';
import HiddenGemsSection from '@/components/home/HiddenGemsSection';
import LocalEcommerceSection from '@/components/home/LocalEcommerceSection';
import TravelSafetySection from '@/components/home/TravelSafetySection';
import CommunityStoriesSection from '@/components/home/CommunityStoriesSection';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <AISearchSection />
      <BookingSection />
      <LocalLogisticsSection />
      <TouristGuidesSection />
      <CrowdIntelligenceSection />
      <HiddenGemsSection />
      <LocalEcommerceSection />
      <TravelSafetySection />
      <CommunityStoriesSection />
      <Footer />
    </main>
  );
}
