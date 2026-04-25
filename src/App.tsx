import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import QRCode from 'react-qr-code';
import { QrCode, ArrowRight, Layout, SearchCode, MapPin, X, Lock, Unlock, ExternalLink, User, Phone, Mail, Download } from 'lucide-react';

const PREDEFINED_PROJECTS = [
  {
    id: 1,
    title: "The PEARL Function Hall",
    niche: "Function Hall",
    rating: "4.7 ⭐",
    image: "/pearl.jpg", // Map background
    mapsUrl: "https://www.google.com/maps/search/The+PEARL+Function+Hall+Srikakulam",
  },
  {
    id: 2,
    title: "Amma Nanna Ladies Hostel",
    niche: "Hospitality",
    rating: "4.5 ⭐",
    image: "/amma-nanna.jpg", // Map background
    mapsUrl: "https://www.google.com/maps/search/Amma+Nanna+Ladies+Hostel+Srikakulam",
  }
];

const SERVICES = [
  {
    title: "Landing Pages",
    description: "High-converting, mobile-optimized landing pages that tell your brand's story.",
    icon: Layout,
  },
  {
    title: "Full-Stack Tools",
    description: "Custom digital tools to automate your workflow and manage operations.",
    icon: SearchCode,
  },
  {
    title: "Maps SEO",
    description: "Dominate local searches. Get your business to the top of Google Maps.",
    icon: MapPin,
  }
];

const WHATSAPP_URL = "https://wa.me/918333968663?text=Namasthe%20Shanak!%20I%20am%20interested%20in%20a%20professional%20website%20demo%20for%20my%20business.";
const GOOGLE_BUSINESS_URL = "https://www.google.com/search?q=Re-View+Designers+Hiramandalam";
const PDF_CONTENT_URL = "https://example.com/viral-youtube-guide.pdf"; // Placeholder for the PDF

export default function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isQrFlipped, setIsQrFlipped] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const [logoError, setLogoError] = useState(false);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername === "admin_shanak" && adminPassword === "Review2026!") {
      setIsAdminLoggedIn(true);
      setAdminUsername("");
      setAdminPassword("");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full bg-white text-slate-900">
      {/* Background Logo Watermark */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-5"
        style={{
          backgroundImage: "url('/logo.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "80%",
        }}
      />
      {/* Header */}
      <nav className="flex items-center justify-between px-6 md:px-10 h-20 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-sm border border-slate-100 flex-shrink-0 bg-white flex items-center justify-center">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="Re-View Designers Logo" 
                className="w-full h-full object-cover object-center scale-[1.75] origin-top md:scale-[1.8]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                <User className="w-8 h-8 text-emerald-600" />
              </div>
            )}
          </div>
          <div className="hidden text-xl md:text-2xl font-black tracking-tight items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-sm">RV</div>
            Re-View Designers
          </div>
        </div>
        <div className="hidden md:flex gap-10 font-medium text-slate-600">
          <a href="#work" className="hover:text-emerald-500 transition-colors">Work</a>
          <a href="#services" className="hover:text-emerald-500 transition-colors">Services</a>
        </div>
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="primary-bg text-white px-6 py-2.5 rounded-full font-bold hover:brightness-105 transition-all shadow-lg shadow-emerald-200 hidden sm:block"
        >
          Contact Us
        </a>
      </nav>

      {/* Main Grid */}
      <main className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow max-w-[1600px] mx-auto w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-between py-4 space-y-12 lg:space-y-0">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-[64px] xl:text-[80px] font-black leading-[0.95] tracking-tighter text-slate-900">
              Re-View <span className="text-red-600">Designers</span>
            </h1>
            <div className="text-slate-700 max-w-2xl leading-relaxed space-y-5 text-base md:text-lg">
              <p className="text-lg md:text-xl font-medium text-slate-800">
                <strong className="text-slate-900 border-b-2 border-emerald-400 pb-0.5">ముఖ్య ఉద్దేశ్యం (Main Concept):</strong><br />
                <span className="inline-block mt-2 font-bold text-emerald-700">"శ్రీకాకుళంలోని స్థానిక వ్యాపారాలను డిజిటల్ ప్రపంచంతో అనుసంధానించడమే మా లక్ష్యం."</span>
              </p>
              
              <p>
                <strong className="text-slate-900">వివరణ (Detailed Description):</strong><br />
                మా Re-View Designers ద్వారా మేము చిన్న మరియు మధ్య తరహా వ్యాపారాలకు (ఉదాహరణకు: మెడికల్ షాపులు, ఫంక్షన్ హాళ్లు, రిటైల్ స్టోర్లు) అత్యాధునిక వెబ్సైట్లను మరియు డిజిటల్ మార్కెటింగ్ సేవలను అందిస్తాము.
              </p>

              <div>
                <strong className="text-slate-900">మేము ఏమి చేస్తాము?</strong>
                <ul className="list-none mt-2 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>అతి తక్కువ సమయంలో వెబ్సైట్:</strong> కేవలం 48 గంటల్లో మీ వ్యాపారం కోసం ఒక ప్రొఫెషనల్ వెబ్సైట్ను రూపొందిస్తాము.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>Google Maps అభివృద్ధి:</strong> మీ షాపు లేదా బిజినెస్ గూగుల్ మ్యాప్స్లో టాప్లో కనిపించేలా చేసి, కస్టమర్ల తాకిడిని పెంచుతాము.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>WhatsApp సేల్స్:</strong> కస్టమర్లు నేరుగా వెబ్సైట్ నుండి మీ WhatsApp కి ఆర్డర్ ఇచ్చేలా స్మార్ట్ ఫీచర్లను జోడిస్తాము.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>QR కోడ్ కనెక్టివిటీ:</strong> కస్టమర్లు ఒక్క స్కాన్తో మీ బిజినెస్ ప్రొఫైల్ను చూసేలా మరియు మమ్మల్ని సంప్రదించేలా సులభమైన మార్గాలను ఏర్పాటు చేస్తాము.</span>
                  </li>
                </ul>
              </div>

              <p className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <strong className="text-emerald-900">మా ప్రత్యేకత:</strong><br />
                మేము కేవలం వెబ్సైట్ డిజైన్ చేయడమే కాకుండా, మీ వ్యాపారం గూగుల్లో మరియు సోషల్ మీడియాలో ఎలా ఎదగాలో ఒక సరైన ప్రణాళికను అందిస్తాము. మీ బిజినెస్ని డిజిటల్గా మార్చడానికి మేమే మీ ఉత్తమ భాగస్వామి.
              </p>
            </div>
            <div className="pt-2 sm:hidden">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block primary-bg text-white px-6 py-3 rounded-full font-bold hover:brightness-105 transition-all shadow-lg shadow-emerald-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-0" id="services">
            {SERVICES.map((service, idx) => {
              const bgColors = ["bg-emerald-100", "bg-blue-100", "bg-orange-100"];
              const textColors = ["text-emerald-600", "text-blue-600", "text-orange-600"];
              return (
                <div key={idx} className="p-5 rounded-3xl bg-slate-50 border border-slate-100 hover-scale">
                  <div className={`w-10 h-10 rounded-xl ${bgColors[idx]} flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${textColors[idx]}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold mb-1 text-slate-900">{service.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-8 lg:pt-4 flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={() => setIsAdminModalOpen(true)}
              className="text-xs uppercase tracking-widest text-slate-400 font-bold hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <Lock className="w-3 h-3" /> Admin Access Control
            </button>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© {new Date().getFullYear()} Re-View</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col gap-6" id="work">
          {/* Project 1 (Dark) */}
          <a href={PREDEFINED_PROJECTS[0].mapsUrl} target="_blank" rel="noopener noreferrer" className="p-8 rounded-[40px] bg-slate-900 text-white relative flex-1 flex flex-col justify-end overflow-hidden group min-h-[300px] xl:min-h-[340px] block cursor-pointer border border-transparent hover:border-emerald-300/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20">
             <div className="absolute top-6 right-8 text-emerald-300 font-black text-xl z-20 transition-transform duration-500 group-hover:scale-110">{PREDEFINED_PROJECTS[0].rating}</div>
             <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full z-10 pointer-events-none transition-all duration-700 group-hover:bg-emerald-400/40"></div>
             
             <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
               <img src={PREDEFINED_PROJECTS[0].image} alt="" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent group-hover:opacity-70 transition-opacity duration-700"></div>
             </div>

             <div className="relative z-20 group-hover:translate-y-[-8px] transition-transform duration-500">
               <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold drop-shadow-md">{PREDEFINED_PROJECTS[0].niche}</span>
               <h2 className="text-3xl font-bold mt-2 leading-tight drop-shadow-md">{PREDEFINED_PROJECTS[0].title}</h2>
               <p className="text-slate-300 mt-2 text-sm max-w-[280px] font-medium leading-relaxed drop-shadow-md">
                 Srikakulam's premium venue digitized with full booking automation and virtual tour.
               </p>
             </div>
          </a>

          {/* Project 2 (Light) */}
          <a href={PREDEFINED_PROJECTS[1].mapsUrl} target="_blank" rel="noopener noreferrer" className="p-8 rounded-[40px] bg-emerald-50/50 border-2 border-emerald-200 hover:border-emerald-400 flex-1 flex flex-col justify-end relative group overflow-hidden min-h-[300px] xl:min-h-[340px] block cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200/50 hover:bg-white">
             <div className="absolute top-6 right-8 text-emerald-500 font-black text-xl z-20 transition-transform duration-500 group-hover:scale-110">{PREDEFINED_PROJECTS[1].rating}</div>
             
             <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
               <img src={PREDEFINED_PROJECTS[1].image} alt="" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 via-emerald-50/60 to-transparent group-hover:opacity-70 transition-opacity duration-700"></div>
             </div>

             <div className="relative z-20 group-hover:translate-y-[-8px] transition-transform duration-500">
               <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold drop-shadow-sm">{PREDEFINED_PROJECTS[1].niche}</span>
               <h2 className="text-3xl font-bold mt-2 text-slate-900 leading-tight drop-shadow-sm">{PREDEFINED_PROJECTS[1].title}</h2>
               <p className="text-slate-800 mt-2 text-sm max-w-[280px] font-medium leading-relaxed drop-shadow-sm">
                 Modernizing guest experiences through streamlined web-checkins and local SEO.
               </p>
             </div>
          </a>
        </div>
      </main>

      {/* Smart QR Pill */}
      <button
        onClick={() => setIsQrModalOpen(true)}
        className="fixed bottom-8 right-8 primary-bg text-white flex items-center gap-3 px-6 py-4 rounded-full font-bold shadow-2xl shadow-emerald-400/40 z-50 pill-bounce hover:scale-110 active:scale-95 transition-transform"
      >
        <QrCode className="w-6 h-6" />
        <span className="hidden sm:block uppercase tracking-wider text-sm">Scan Me</span>
      </button>

      {/* QR Modal */}
      <AnimatePresence>
        {isQrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-6 perspective-[1000px]"
            onClick={() => {
              setIsQrModalOpen(false);
              setTimeout(() => setIsQrFlipped(false), 300);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateY: isQrFlipped ? 180 : 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[420px] grid"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT: QR CODE */}
              <div 
                className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-12 w-full text-center shadow-2xl [grid-area:1/1]"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <div 
                  onClick={() => setIsQrFlipped(true)}
                  className="cursor-pointer group block"
                >
                  <div className="bg-slate-50 p-6 md:p-8 rounded-3xl mb-8 border-2 border-dashed border-slate-200 group-hover:border-emerald-300 transition-colors relative">
                    <div className="w-full aspect-square bg-white border-[12px] border-white shadow-inner flex items-center justify-center overflow-hidden rounded-xl p-2 md:p-4">
                      <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500">
                        <QRCode
                          value="tel:+918333968663"
                          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                          viewBox={`0 0 256 256`}
                          fgColor="#0f172a"
                          bgColor="#ffffff"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                      <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full font-semibold text-emerald-600 shadow-lg shadow-black/5">
                        Tap to View Details
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Save Our Contact</h2>
                  <p className="text-slate-500 mb-8 px-4 font-medium">Scan to save or tap to view our contact details directly.</p>
                </div>
                <button 
                  onClick={() => setIsQrModalOpen(false)} 
                  className="w-full py-4 text-slate-400 font-bold hover:text-slate-900 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* BACK: CONTACT DETAILS */}
              <div 
                className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-12 w-full text-center shadow-2xl [grid-area:1/1]"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <a 
                  href="tel:+918333968663"
                  className="cursor-pointer group block relative overflow-hidden rounded-3xl bg-slate-50 border-2 border-slate-200 hover:border-emerald-400 transition-all shadow-lg hover:shadow-xl text-left p-5 md:p-8 mb-6 md:mb-8"
                >
                  {/* Logo Background with 75% transparency (opacity 25%) */}
                  <div 
                    className="absolute inset-0 z-0 opacity-25 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: "url('/logo.png')" }}
                  />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-md overflow-hidden border-4 border-emerald-100">
                      {!logoError ? (
                        <img 
                          src="/logo.png" 
                          alt="Re-View Designers Logo" 
                          className="w-full h-full object-cover p-1"
                          onError={() => setLogoError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                          <User className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-0.5 md:mb-1">Shanak Ganta</h2>
                    <p className="text-emerald-600 font-bold mb-4 md:mb-6 tracking-wide text-xs md:text-sm">RE-VIEW DESIGNERS</p>
                    
                    <div className="w-full space-y-2 md:space-y-3">
                      <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/90 p-2.5 md:p-3 rounded-xl border border-slate-100 backdrop-blur-sm group-hover:border-emerald-200 transition-colors">
                        <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-800 font-bold text-sm md:text-sm whitespace-nowrap">+91 83339 68663</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/90 p-2.5 md:p-3 rounded-xl border border-slate-100 backdrop-blur-sm group-hover:border-emerald-200 transition-colors overflow-hidden">
                        <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-800 font-bold text-xs md:text-sm truncate">shanakganta@gmail.com</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 md:mt-6 flex items-center gap-2 bg-emerald-500 text-white px-6 py-2.5 md:py-3 rounded-full font-bold group-hover:bg-emerald-600 group-hover:scale-105 transition-all shadow-lg shadow-emerald-500/30">
                      <Phone className="w-4 h-4 fill-current" />
                      Call Now
                    </div>
                  </div>
                </a>
                <button 
                  onClick={() => setIsQrFlipped(false)} 
                  className="w-full py-4 text-slate-400 font-bold hover:text-slate-900 transition-colors"
                >
                  Show QR Code
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AnimatePresence>
        {isAdminModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setIsAdminModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] shadow-2xl p-10 max-w-[400px] w-full relative"
            >
              <button 
                onClick={() => setIsAdminModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-10 text-center">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-[20px] mx-auto mb-6 text-slate-900">
                  {isAdminLoggedIn ? <Unlock className="w-8 h-8" strokeWidth={2.5} /> : <Lock className="w-8 h-8" strokeWidth={2.5} />}
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Admin Portal</h3>
                <p className="text-slate-500 font-medium">Manage agency projects.</p>
              </div>

              {isAdminLoggedIn ? (
                <div className="text-center pb-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold mb-8">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Authenticated
                  </div>
                  <button 
                    onClick={() => { setIsAdminLoggedIn(false); setIsAdminModalOpen(false); }}
                    className="block w-full py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-colors duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      value={adminUsername}
                      onChange={(e) => setAdminUsername(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-300 bg-slate-50 focus:bg-white text-lg font-medium placeholder-slate-400 text-slate-900"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-300 bg-slate-50 focus:bg-white text-lg font-medium placeholder-slate-400 text-slate-900"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 primary-bg text-white font-bold text-lg rounded-2xl hover:brightness-105 transition-all duration-300 mt-2 shadow-lg shadow-emerald-200"
                  >
                    Authenticate
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

