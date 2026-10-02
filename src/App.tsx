import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { ServicesSection } from './components/ServicesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { AboutSection } from './components/AboutSection';
import { CtaBanner } from './components/CtaBanner';
import { LobbyDoorways } from './components/LobbyDoorways';
import { CareersRoom } from './components/CareersRoom';
import { PandoraServiceDeskRoom } from './components/PandoraServiceDeskRoom';
import { LoungeRoom } from './components/LoungeRoom';
import { ContactRoom } from './components/ContactRoom';
import { Footer } from './components/Footer';

export default function App() {
  const [currentRoom, setCurrentRoom] = useState<'lobby' | 'careers-room' | 'service-desk' | 'lounge' | 'contact-room'>('lobby');
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'service-desk') {
      setCurrentRoom('service-desk');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'lounge') {
      setCurrentRoom('lounge');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'careers' || sectionId === 'careers-room') {
      setCurrentRoom('careers-room');
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === 'contact' || sectionId === 'contact-room') {
      setCurrentRoom('contact-room');
      window.scrollTo(0, 0);
      return;
    }

    // Default: Switch to lobby
    setCurrentRoom('lobby');
    setActiveSection(sectionId);
    
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenContactRoom = () => {
    setCurrentRoom('contact-room');
    window.scrollTo(0, 0);
  };

  const handleOpenCareersRoom = () => {
    setCurrentRoom('careers-room');
    window.scrollTo(0, 0);
  };

  const handleOpenPandoraRoom = () => {
    setCurrentRoom('service-desk');
    window.scrollTo(0, 0);
  };

  const handleOpenLoungeRoom = () => {
    setCurrentRoom('lounge');
    window.scrollTo(0, 0);
  };

  const handleBackToLobby = () => {
    setCurrentRoom('lobby');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#006cff] selection:text-white">
      
      {/* Fixed Header Banner with Ticker Above (Shown across all standard rooms) */}
      {currentRoom !== 'service-desk' && (
        <Navbar
          activeSection={currentRoom === 'lobby' ? activeSection : currentRoom}
          onNavigate={handleNavigate}
          onOpenContact={handleOpenContactRoom}
        />
      )}

      <main className={`flex-1 ${currentRoom !== 'service-desk' ? 'pt-[102px]' : ''}`}>
        {/* ROOM 1: Main Lobby (100% Authentic contax360.com Front Page) */}
        {currentRoom === 'lobby' && (
          <>
            {/* 1. Authentic Hero Section with rotating text and 3 Location Cards */}
            <Hero
              onOpenContact={handleOpenContactRoom}
              onNavigate={handleNavigate}
            />

            {/* 2. Authentic Video Showcase of Contax360 Staff & Environment (Clickless) */}
            <VideoSection />

            {/* 3. Authentic BPO & KPO Services (6 Pillars with original blue icons) */}
            <ServicesSection
              onOpenQuoteModal={handleOpenContactRoom}
            />

            {/* 4. Authentic Certifications Section (NMSDC MBE, Women-Owned, HIPAA, PCI-DSS) */}
            <CertificationsSection />

            {/* 5. Authentic Meet Our Team Section with Pandora Lee (Room 03) */}
            <LeadershipSection onEnterServiceDesk={handleOpenPandoraRoom} />

            {/* 6. Authentic About Our Company Section with high-res Team Photo */}
            <AboutSection />

            {/* 7. Authentic Call to Action Banner */}
            <CtaBanner
              onOpenQuoteModal={handleOpenContactRoom}
            />

            {/* 8. Dedicated Portals to Rooms (Room 03 Desk, Room 06 Lounge, Room 02 Careers, Room 04 Contact) */}
            <LobbyDoorways
              onEnterServiceDesk={handleOpenPandoraRoom}
              onEnterLoungeRoom={handleOpenLoungeRoom}
              onEnterCareersRoom={handleOpenCareersRoom}
            />
          </>
        )}

        {/* ROOM 2: Dedicated Careers & Recruitment Room */}
        {currentRoom === 'careers-room' && (
          <CareersRoom
            onBackToLobby={handleBackToLobby}
          />
        )}

        {/* ROOM 3: 03 / THE CUSTOMER-SERVICE DESK (Pandora Lee) */}
        {currentRoom === 'service-desk' && (
          <PandoraServiceDeskRoom
            onBackToLobby={handleBackToLobby}
            onNavigateToRoom={(room) => {
              if (room === 'careers') setCurrentRoom('careers-room');
              else if (room === 'lounge') setCurrentRoom('lounge');
              else if (room === 'contact') setCurrentRoom('contact-room');
              else setCurrentRoom('lobby');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuoteModal={handleOpenContactRoom}
          />
        )}

        {/* ROOM 4: 04 / CONTACT & CLIENT SOLUTIONS ROOM */}
        {currentRoom === 'contact-room' && (
          <ContactRoom
            onBackToLobby={handleBackToLobby}
            onNavigateToDesk={handleOpenPandoraRoom}
          />
        )}

        {/* ROOM 6: 06 / THE LISTENING LOUNGE & RADIO */}
        {currentRoom === 'lounge' && (
          <LoungeRoom
            onBackToLobby={handleBackToLobby}
            onNavigateToDesk={handleOpenPandoraRoom}
          />
        )}
      </main>

      {/* 4-Column Footer (when in lobby, careers, lounge, or contact) */}
      {currentRoom !== 'service-desk' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenQuoteModal={handleOpenContactRoom}
        />
      )}
    </div>
  );
}
