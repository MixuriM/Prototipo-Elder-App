/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { 
  Heart, 
  Users, 
  MessageCircle, 
  ShoppingCart, 
  TriangleAlert, 
  Plus, 
  Home, 
  Settings,
  ChevronRight,
  Brain,
  Activity,
  Stethoscope,
  Utensils,
  Search,
  Filter,
  Briefcase,
  UserCircle,
  Building2,
  PlusSquare,
  ThumbsUp,
  MessageSquare,
  Share2,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Mic,
  Moon,
  Sun,
  User,
  MessagesSquare,
  Pill
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'home' | 'saude' | 'remedios' | 'homecare' | 'mensagens' | 'shop' | 'avisos' | 'configuracoes' | 'perfil';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [userName, setUserName] = useState('João Silva');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [alertSensitivity, setAlertSensitivity] = useState(70);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Dashboard onNavigate={setCurrentView} isDarkMode={isDarkMode} />;
      case 'saude':
        return <SaudeView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'remedios':
        return <RemediosView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'homecare':
        return <HomeCareView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'shop':
        return <ShopView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'avisos':
        return <AvisosView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'mensagens':
        return <MensagensView onBack={() => setCurrentView('home')} isDarkMode={isDarkMode} />;
      case 'perfil':
        return (
          <PerfilView 
            onBack={() => setCurrentView('home')} 
            userName={userName} 
            setUserName={setUserName} 
            isDarkMode={isDarkMode} 
          />
        );
      case 'configuracoes':
        return (
          <ConfiguracoesView 
            onBack={() => setCurrentView('home')} 
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            alertSensitivity={alertSensitivity}
            setAlertSensitivity={setAlertSensitivity}
          />
        );
      default:
        return (
          <div className="flex flex-col h-full bg-[#333333] text-white p-6">
            <button 
              onClick={() => setCurrentView('home')}
              className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="rotate-180 mr-2" />
              Voltar para o Início
            </button>
            <h1 className="text-3xl font-bold uppercase mb-4">{currentView}</h1>
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-3xl">
              <p className="text-gray-500 italic text-center">Conteúdo de {currentView} em desenvolvimento...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#e0e0e0]'} flex justify-center items-center font-sans p-4 transition-colors duration-500`}>
      {/* iPhone Container */}
      <div className={`relative w-full max-w-[430px] aspect-[9/19.5] ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#f4f4f9]'} overflow-hidden shadow-2xl flex flex-col rounded-[60px] border-[12px] ${isDarkMode ? 'border-[#333333]' : 'border-white'} transition-colors duration-500`}>
        
        {/* Top Header with Theme Toggle and Clock as per image */}
        <div className="px-8 pt-10 pb-2 flex justify-between items-center z-30">
          <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>9:30</span>
          
          <div className="flex items-center gap-4">
             {/* Dynamic Notch/Hole Punch */}
            <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-black' : 'bg-gray-300'} shadow-inner`}></div>
          </div>

          <div className="flex items-center gap-2">
            <span className="sr-only">Status</span>
            <div className="flex gap-1">
              <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></div>
              <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-gray-800'}`}></div>
            </div>
          </div>
        </div>

        {/* Back and Theme Toggle Row */}
        <div className="px-8 py-2 flex justify-between items-center z-30">
          <button 
            onClick={() => currentView !== 'home' ? setCurrentView('home') : null}
            className={`p-2 rounded-full transition-opacity ${currentView === 'home' ? 'opacity-0' : 'opacity-100 hover:bg-black/10'}`}
          >
            <ChevronRight className="rotate-180 w-6 h-6 text-black" />
          </button>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 hover:bg-black/5 rounded-full transition-all"
          >
            {isDarkMode ? <Sun className="w-8 h-8 text-white" /> : <Moon className="w-8 h-8 text-black" />}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-28 scrollbar-hide pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation matching Image exactly */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] ${isDarkMode ? 'bg-[#333333]/90 text-white' : 'bg-[#efecf3]/90 text-gray-600'} backdrop-blur-md rounded-full h-18 flex items-center justify-around px-2 shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20`}>
          <button className="p-3 hover:scale-110 transition-transform">
            <Mic className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentView('perfil')}
            className={`p-3 rounded-full transition-all ${currentView === 'perfil' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <User className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentView('home')}
            className={`p-4 rounded-full transition-all ${currentView === 'home' ? 'scale-125' : 'hover:scale-105'}`}
          >
            <Home className="w-8 h-8" />
          </button>
          <button 
            onClick={() => setCurrentView('configuracoes')}
            className={`p-3 rounded-full transition-all ${currentView === 'configuracoes' ? 'scale-110' : 'hover:scale-105'}`}
          >
            <Settings className="w-6 h-6" />
          </button>
          <button className="p-3 hover:scale-110 transition-transform">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Home Indicator */}
        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 ${isDarkMode ? 'bg-white/20' : 'bg-black/10'} rounded-full`}></div>
      </div>
    </div>
  );
}

function ConfiguracoesView({ 
  onBack, 
  isDarkMode, 
  setIsDarkMode, 
  alertSensitivity, 
  setAlertSensitivity 
}: { 
  onBack: () => void,
  isDarkMode: boolean,
  setIsDarkMode: (val: boolean) => void,
  alertSensitivity: number,
  setAlertSensitivity: (val: number) => void
}) {
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subtextColor = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className="flex flex-col h-full text-black pt-4">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      <h1 className={`text-4xl font-black mb-8 uppercase ${textColor}`}>Configurações</h1>

      <div className="grid gap-6">
        {/* Modo Escuro Toggle */}
        <div className={`${cardBg} p-6 rounded-[32px] flex justify-between items-center shadow-sm`}>
          <div>
            <h3 className={`text-xl font-bold ${textColor}`}>Modo Escuro</h3>
            <p className={`text-sm ${subtextColor}`}>Ajusta o brilho da tela</p>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-14 h-8 rounded-full relative transition-colors ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            <motion.div 
              animate={{ x: isDarkMode ? 24 : 4 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
            />
          </button>
        </div>

        {/* Sensibilidade de Alerta */}
        <div className={`${cardBg} p-6 rounded-[32px] flex flex-col gap-4 shadow-sm`}>
          <div>
            <h3 className={`text-xl font-bold ${textColor}`}>Sensibilidade de Alerta</h3>
            <p className={`text-sm ${subtextColor}`}>Frequência de avisos urgentes</p>
          </div>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={alertSensitivity}
              onChange={(e) => setAlertSensitivity(parseInt(e.target.value))}
              className="flex-1 accent-blue-500"
            />
            <span className={`text-xl font-black w-12 text-right ${textColor}`}>{alertSensitivity}%</span>
          </div>
        </div>

        {/* Notificações */}
        <div className={`${cardBg} p-6 rounded-[32px] flex justify-between items-center shadow-sm`}>
          <div>
            <h3 className={`text-xl font-bold ${textColor}`}>Notificações Push</h3>
            <p className={`text-sm ${subtextColor}`}>Lembretes em tempo real</p>
          </div>
          <div className="w-14 h-8 rounded-full bg-blue-500 relative">
            <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
          </div>
        </div>

        {/* Fonte Grande */}
        <div className={`${cardBg} p-6 rounded-[32px] flex justify-between items-center shadow-sm`}>
          <div>
            <h3 className={`text-xl font-bold ${textColor}`}>Fonte Grande</h3>
            <p className={`text-sm ${subtextColor}`}>Facilita a leitura para idosos</p>
          </div>
          <div className="w-14 h-8 rounded-full bg-blue-500 relative">
            <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
          </div>
        </div>

        <div className="pb-10">
          <button 
            onClick={onBack}
            className={`w-full py-4 rounded-full font-black text-xl shadow-lg transition-all duration-300 ${
              isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-white text-black border border-black/5 hover:bg-gray-50'
            }`}
          >
            SALVAR ALTERAÇÕES
          </button>
        </div>
      </div>
    </div>
  );
}

function PerfilView({ 
  onBack, 
  userName, 
  setUserName, 
  isDarkMode 
}: { 
  onBack: () => void,
  userName: string,
  setUserName: (val: string) => void,
  isDarkMode: boolean
}) {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';
  const inputBg = isDarkMode ? 'bg-black/20' : 'bg-white';

  return (
    <div className="flex flex-col h-full pt-4">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>

      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden shadow-xl mb-4 bg-gray-200">
            <img src="https://picsum.photos/seed/elder/300/300" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="absolute bottom-4 right-0 bg-blue-500 p-2 rounded-full text-white shadow-lg border-2 border-white">
            <Settings className="w-4 h-4" />
          </button>
        </div>
        <h1 className={`text-3xl font-black uppercase tracking-tighter ${textColor}`}>{userName}</h1>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Plano Senior Premium</p>
      </div>

      <div className="grid gap-4">
        {/* Nome do Idoso */}
        <div className={`${cardBg} p-6 rounded-[32px] flex flex-col gap-2 shadow-sm`}>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nome do Idoso</label>
          <div className={`${inputBg} p-4 rounded-2xl flex items-center gap-3`}>
            <User className="w-5 h-5 text-blue-500" />
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              className={`bg-transparent border-none py-1 text-lg font-bold focus:outline-none w-full ${textColor}`}
              placeholder="Digite o nome..."
            />
          </div>
        </div>

        {/* Informações Extras */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`${cardBg} p-4 rounded-[32px] flex flex-col items-center justify-center text-center shadow-sm`}>
             <span className="text-[10px] font-black text-gray-400 uppercase mb-1">Idade</span>
             <span className={`text-xl font-bold ${textColor}`}>78 anos</span>
          </div>
          <div className={`${cardBg} p-4 rounded-[32px] flex flex-col items-center justify-center text-center shadow-sm`}>
             <span className="text-[10px] font-black text-gray-400 uppercase mb-1">Peso</span>
             <span className={`text-xl font-bold ${textColor}`}>72 kg</span>
          </div>
        </div>

        {/* QR Code / Emergencia */}
        <button className="bg-red-600 p-6 rounded-[32px] flex items-center justify-between text-white shadow-lg mt-4 cursor-pointer hover:bg-red-700 transition-colors">
          <div>
             <h3 className="text-xl font-black uppercase">Ficha de Emergência</h3>
             <p className="text-xs font-bold opacity-80 uppercase">Acesso rápido para socorristas</p>
          </div>
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
      
      <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-12 mb-10 opacity-50">
        ID de Usuário: SENIOR-9928-AX-00
      </p>
    </div>
  );
}

function Dashboard({ onNavigate, isDarkMode }: { onNavigate: (view: View) => void, isDarkMode: boolean }) {
  const [activeAviso, setActiveAviso] = useState(0);

  const cardTitleColor = "text-black";

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Row 1: Saúde & Remédios */}
      <div className="grid grid-cols-2 gap-4">
        <Card 
          title="SAÚDE" 
          icon={<Heart className="w-24 h-24 fill-red-500 text-red-500 transition-transform duration-500 hover:scale-110" />} 
          bgColor="#ffd1d1"
          titleColor={cardTitleColor}
          onClick={() => onNavigate('saude')}
        />
        <Card 
          title="REMÉDIOS" 
          icon={<PillIcon />} 
          bgColor="#ffe1d1"
          titleColor={cardTitleColor}
          onClick={() => onNavigate('remedios')}
        />
      </div>

      {/* Middle: Homecare */}
      <WideCard 
        title="HOMECARE" 
        icon={
          <div className="flex items-center gap-1">
             <div className="relative">
                <Users className="w-12 h-12 text-[#4a90e2]" />
                <div className="absolute -right-2 top-0">
                   <div className="w-6 h-6 bg-[#8b572a] rounded-full flex items-center justify-center">
                     <span className="text-[8px] text-white font-bold">👴</span>
                   </div>
                </div>
             </div>
          </div>
        } 
        color="bg-[#c8d6ff]"
        onClick={() => onNavigate('homecare')}
      />

      {/* Row 2: Alexa & Mensagens */}
      <div className="grid grid-cols-2 gap-4">
        <Card 
          title="alexa" 
          icon={<AlexaIcon />} 
          bgColor="#d1d5ff"
          titleColor="text-black"
          onClick={() => {}}
        />
        <Card 
          title="MENSAGENS" 
          icon={
            <div className="relative">
              <MessageCircle className="w-20 h-20 fill-[#00CAFF] text-[#00CAFF]" />
              <div className="absolute -right-2 -bottom-2">
                 <MessageCircle className="w-14 h-14 fill-[#4caf50] text-[#4caf50] opacity-60" />
              </div>
            </div>
          } 
          bgColor="#c8edff"
          titleColor={cardTitleColor}
          onClick={() => onNavigate('mensagens')}
        />
      </div>

      {/* Shop */}
      <WideCard 
        title="SHOP" 
        icon={
          <div className="relative">
            <ShoppingCart className="w-10 h-10 text-[#ff4d4d]" />
            <div className="absolute -top-4 -right-4 flex gap-1">
               <div className="w-4 h-4 bg-orange-400 rounded-sm shadow-sm"></div>
               <div className="w-4 h-6 bg-green-500 rounded-sm shadow-sm"></div>
            </div>
          </div>
        } 
        color="bg-[#fff0b3]"
        onClick={() => onNavigate('shop')}
      />

      {/* Avisos */}
      <div className="flex flex-col gap-3">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onTap={() => onNavigate('avisos')}
          className="h-20 bg-[#efeef4] rounded-[32px] flex items-center justify-center gap-4 cursor-pointer shadow-sm relative"
        >
          <div className="relative">
            <TriangleAlert className="w-12 h-12 text-[#ffcc00] fill-[#ffcc00]/20" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#efeef4]">
              3
            </span>
          </div>
          <span className="text-2xl font-black text-black uppercase tracking-widest">AVISOS</span>
        </motion.div>
      </div>
    </div>
  );
}

function Card({ title, icon, bgColor, titleColor = "text-black", onClick }: { 
  title: string, 
  icon: ReactNode, 
  bgColor: string,
  titleColor?: string,
  onClick: () => void
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTap={onClick}
      style={{ backgroundColor: bgColor }}
      className={`h-52 rounded-[40px] flex flex-col items-center justify-center p-4 cursor-pointer shadow-sm`}
    >
      <div className="flex-1 flex items-center justify-center">
        {icon}
      </div>
      <span className={`text-xl font-black uppercase tracking-tighter ${titleColor}`}>{title}</span>
    </motion.div>
  );
}

function WideCard({ title, icon, color, onClick }: { 
  title: string, 
  icon: ReactNode, 
  color: string,
  onClick: () => void
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onTap={onClick}
      className={`h-22 ${color} rounded-[32px] flex items-center justify-center gap-6 px-8 cursor-pointer shadow-sm`}
    >
      <span className="text-3xl font-black text-black uppercase tracking-tight">{title}</span>
      <div>{icon}</div>
    </motion.div>
  );
}

// Custom Icons to match the image better
function PillIcon() {
  return (
    <div className="relative w-24 h-24 rotate-[-30deg] flex items-center justify-center">
      <div className="absolute w-14 h-7 bg-[#00CAFF] rounded-l-full border-4 border-black left-0"></div>
      <div className="absolute w-14 h-7 bg-[#ff4d4d] rounded-r-full border-4 border-black left-[56px] flex items-center px-1">
         <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
      </div>
      <div className="absolute top-[60px] w-14 h-7 bg-gray-300 rounded-full border-4 border-black left-[10px] opacity-40"></div>
    </div>
  );
}

function AlexaIcon() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full border-[8px] border-[#00CAFF] flex items-center justify-center bg-white shadow-xl">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00CAFF]/20 to-transparent flex items-center justify-center">
           <div className="w-10 h-10 rounded-full border-4 border-[#00CAFF] border-dashed animate-spin-slow"></div>
        </div>
      </div>
      <span className="mt-2 text-xl font-bold tracking-tighter">alexa</span>
    </div>
  );
}

function SaudeView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const stats = [
    { label: 'Batimentos', value: '72 bpm', color: 'text-red-400' },
    { label: 'Pressão', value: '12/8', color: 'text-blue-400' },
    { label: 'Sono', value: '7h 30m', color: 'text-purple-400' },
  ];

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';

  return (
    <div className="flex flex-col h-full pt-4">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      <h1 className={`text-4xl font-black mb-8 uppercase ${textColor}`}>SAÚDE</h1>
      
      <div className="grid gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`${cardBg} p-6 rounded-[32px] flex justify-between items-center shadow-sm`}>
            <span className={`text-xl font-bold ${textColor}`}>{stat.label}</span>
            <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-red-500/10 border border-red-500/20 p-6 rounded-[32px]">
        <h3 className={`font-bold mb-2 ${textColor}`}>Dica do Dia</h3>
        <p className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>Lembre-se de beber pelo menos 2 litros de água hoje para manter a hidratação.</p>
      </div>
    </div>
  );
}

function RemediosView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const medications = [
    { name: 'Aspirina', time: '08:00', taken: true },
    { name: 'Vitaminas', time: '12:00', taken: false },
    { name: 'Pressão', time: '20:00', taken: false },
  ];

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';

  return (
    <div className="flex flex-col h-full pt-4">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      <h1 className={`text-4xl font-black mb-8 uppercase ${textColor}`}>REMÉDIOS</h1>

      <div className="grid gap-4">
        {medications.map((med) => (
          <div key={med.name} className={`${cardBg} p-6 rounded-[32px] flex justify-between items-center shadow-sm`}>
            <div>
              <h3 className={`text-xl font-bold ${textColor}`}>{med.name}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>{med.time}</p>
            </div>
            <div className={`w-8 h-8 rounded-full border-2 ${med.taken ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}></div>
          </div>
        ))}
      </div>

      <button className={`mt-8 w-full py-4 rounded-full font-black text-xl shadow-lg transition-all ${
        isDarkMode ? 'bg-white text-black' : 'bg-white text-black border border-black/5 hover:bg-gray-50'
      }`}>
        ADICIONAR LEMBRETE
      </button>
    </div>
  );
}

function AvisosView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const notifications = [
    { title: 'Consulta Médica', date: 'Amanhã, 14:00', type: 'info' },
    { title: 'Estoque Baixo: Aspirina', date: 'Hoje', type: 'warning' },
    { title: 'Exercício: Caminhada', date: 'Hoje, 17:00', type: 'info' },
  ];

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';

  return (
    <div className="flex flex-col h-full pt-4">
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      <h1 className={`text-4xl font-black mb-8 uppercase ${textColor}`}>Avisos</h1>

      <div className="grid gap-4">
        {notifications.map((notif, idx) => (
          <div key={idx} className={`${cardBg} p-6 rounded-[32px] flex items-start gap-4 shadow-sm`}>
            <div className={`mt-1 w-3 h-3 rounded-full ${notif.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
            <div>
              <h3 className={`text-xl font-bold ${textColor}`}>{notif.title}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>{notif.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const categories = ['Todos', 'Física', 'Mental', 'Utensílios', 'Higiene', 'Conforto'];

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-[#efeef4]';
  const subBg = isDarkMode ? 'bg-black/40' : 'bg-white';

  useEffect(() => {
    if (containerRef.current && innerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const innerWidth = innerRef.current.scrollWidth;
      setConstraints({ left: -(innerWidth - containerWidth + 48), right: 0 });
    }
  }, []);

  const products = [
    { id: 1, name: 'Andador Ergonômico', price: 'R$ 250,00', category: 'Física', icon: <Activity className="w-8 h-8 text-blue-400" /> },
    { id: 2, name: 'Jogos de Memória', price: 'R$ 45,00', category: 'Mental', icon: <Brain className="w-8 h-8 text-purple-400" /> },
    { id: 3, name: 'Kit de Talheres Adaptados', price: 'R$ 89,00', category: 'Utensílios', icon: <Utensils className="w-8 h-8 text-orange-400" /> },
    { id: 4, name: 'Monitor de Pressão', price: 'R$ 180,00', category: 'Física', icon: <Stethoscope className="w-8 h-8 text-red-500" /> },
    { id: 5, name: 'Livro de Colorir Terapêutico', price: 'R$ 35,00', category: 'Mental', icon: <Brain className="w-8 h-8 text-pink-400" /> },
    { id: 6, name: 'Lupa com Luz LED', price: 'R$ 60,00', category: 'Utensílios', icon: <Search className="w-8 h-8 text-yellow-500" /> },
  ];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className={`flex flex-col h-full pt-4 ${textColor}`}>
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-4xl font-black uppercase ${textColor}`}>SHOP</h1>
        <div className="bg-blue-500 p-2 rounded-full shadow-lg">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${cardBg} rounded-full px-6 py-3 flex items-center gap-3 mb-6 shadow-sm`}>
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="O que você procura?" 
          className={`bg-transparent border-none focus:outline-none w-full ${textColor}`}
        />
      </div>

      {/* Categories */}
      <div className="relative mb-12 -mx-6 overflow-hidden" ref={containerRef}>
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          ref={innerRef}
          className="flex gap-3 px-6 cursor-grab active:cursor-grabbing w-max items-center h-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full whitespace-nowrap font-black text-sm uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-blue-500 text-white shadow-lg scale-105' 
                  : `${cardBg} ${textColor} shadow-sm`
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4 pb-10">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            className={`${cardBg} p-4 rounded-[32px] flex flex-col gap-3 shadow-sm`}
          >
            <div className={`${subBg} w-full aspect-square rounded-[24px] flex items-center justify-center shadow-inner`}>
              {product.icon}
            </div>
            <div>
              <h3 className={`font-bold text-sm leading-tight mb-1 ${textColor}`}>{product.name}</h3>
              <p className={`${textColor} font-black`}>{product.price}</p>
            </div>
            <button className={`py-2 rounded-full text-xs font-black uppercase mt-auto transition-all ${
              isDarkMode ? 'bg-white text-black' : 'bg-white text-black border border-black/5 hover:bg-gray-100'
            }`}>
              Comprar
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HomeCareView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed', 'jobs', 'caregivers', 'companies'
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsInnerRef = useRef<HTMLDivElement>(null);

  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';

  const tabs = [
    { id: 'feed', label: 'Feed', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'jobs', label: 'Vagas', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'caregivers', label: 'Cuidadores', icon: <UserCircle className="w-5 h-5" /> },
    { id: 'companies', label: 'Empresas', icon: <Building2 className="w-5 h-5" /> },
  ];

  useEffect(() => {
    if (tabsRef.current && tabsInnerRef.current) {
      const containerWidth = tabsRef.current.offsetWidth;
      const innerWidth = tabsInnerRef.current.scrollWidth;
      setConstraints({ left: -(innerWidth - containerWidth + 48), right: 0 });
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <HomeCareFeed isDarkMode={isDarkMode} />;
      case 'jobs':
        return <HomeCareJobs isDarkMode={isDarkMode} />;
      case 'caregivers':
        return <HomeCareProfiles isDarkMode={isDarkMode} />;
      case 'companies':
        return <HomeCareCompanies isDarkMode={isDarkMode} />;
      default:
        return <HomeCareFeed isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`flex flex-col h-full pt-4 ${textColor}`}>
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-4xl font-black uppercase tracking-tighter ${textColor}`}>NETWORK</h1>
        <div className="bg-blue-600 p-2 rounded-2xl shadow-lg">
          <Users className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md'} rounded-[24px] px-6 py-3 flex items-center gap-3 mb-6`}>
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Buscar cuidadores, vagas..." 
          className={`bg-transparent border-none focus:outline-none w-full font-medium ${textColor} placeholder:text-gray-500`}
        />
      </div>

      {/* LinkedIn Style Draggable Tabs */}
      <div className="relative mb-6 -mx-6 overflow-hidden" ref={tabsRef}>
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          ref={tabsInnerRef}
          className="flex gap-3 px-6 cursor-grab active:cursor-grabbing w-max items-center h-12"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap font-black transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : `${cardBg} ${textColor}`
              }`}
            >
              {tab.icon}
              <span className="uppercase text-xs tracking-widest">{tab.label}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function HomeCareFeed({ isDarkMode }: { isDarkMode: boolean }) {
  const posts = [
    {
      id: 1,
      author: 'Maria Oliveira',
      role: 'Cuidadora Certificada',
      avatar: 'https://picsum.photos/seed/maria/100/100',
      content: 'Dica do dia: A hidratação é fundamental para idosos, especialmente no verão. Lembre-se de oferecer água a cada 2 horas! 💧',
      likes: 24,
      comments: 5,
      time: '2h atrás',
    },
    {
      id: 2,
      author: 'Lar Feliz Home Care',
      role: 'Empresa de Cuidados',
      avatar: 'https://picsum.photos/seed/lar/100/100',
      content: 'Estamos com novas vagas para técnicos de enfermagem em São Paulo. Venha fazer parte da nossa equipe de heróis! 🏥',
      image: 'https://picsum.photos/seed/nursing/400/250',
      likes: 45,
      comments: 12,
      time: '5h atrás',
    },
  ];

  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subtextColor = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className="flex flex-col gap-6">
      {/* Create Post */}
      <div className={`${cardBg} p-4 rounded-[32px] flex items-center gap-4 shadow-sm`}>
        <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden border-2 border-blue-500">
          <img src="https://picsum.photos/seed/user/100/100" alt="User" />
        </div>
        <button className={`flex-1 text-left font-medium px-4 py-2 rounded-full ${isDarkMode ? 'bg-black/20 text-white/50' : 'bg-gray-100 text-black/50'}`}>
          Começar uma publicação...
        </button>
        <PlusSquare className="w-8 h-8 text-blue-500" />
      </div>

      {/* Posts */}
      {posts.map(post => (
        <div key={post.id} className={`${cardBg} rounded-[32px] overflow-hidden shadow-sm`}>
          <div className="p-4 flex items-center gap-3">
            <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm" />
            <div>
              <h3 className={`font-bold ${textColor}`}>{post.author}</h3>
              <p className={`text-xs ${subtextColor}`}>{post.role} • {post.time}</p>
            </div>
          </div>
          <div className="px-4 pb-4">
            <p className={`text-sm leading-relaxed mb-4 ${textColor}`}>{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="w-full rounded-2xl mb-4 shadow-sm" />
            )}
            <div className={`flex justify-between items-center pt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
              <button className={`flex items-center gap-2 ${textColor} hover:text-blue-500 transition-colors`}>
                <ThumbsUp className="w-5 h-5" />
                <span className="text-xs font-bold">{post.likes}</span>
              </button>
              <button className={`flex items-center gap-2 ${textColor} hover:text-blue-500 transition-colors`}>
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs font-bold">{post.comments}</span>
              </button>
              <button className={`flex items-center gap-2 ${textColor} hover:text-blue-500 transition-colors`}>
                <Share2 className="w-5 h-5" />
                <span className="text-xs font-bold">Compartilhar</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HomeCareJobs({ isDarkMode }: { isDarkMode: boolean }) {
  const jobs = [
    { id: 1, title: 'Cuidador Noturno', company: 'Saúde em Casa', location: 'São Paulo, SP', salary: 'R$ 2.800', type: 'CLT', posted: '1d atrás' },
    { id: 2, title: 'Técnico de Enfermagem', company: 'Home Care Plus', location: 'Rio de Janeiro, RJ', salary: 'R$ 3.500', type: 'PJ', posted: '3d atrás' },
    { id: 3, title: 'Acompanhante Terapêutico', company: 'Viver Bem', location: 'Curitiba, PR', salary: 'R$ 2.200', type: 'CLT', posted: '5d atrás' },
  ];

  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subtextColor = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-black uppercase mb-2 text-blue-500">Vagas Recomendadas</h2>
      {jobs.map(job => (
        <div key={job.id} className={`${cardBg} p-5 rounded-[32px] border-l-8 border-blue-500 shadow-sm`}>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className={`font-black text-lg uppercase ${textColor}`}>{job.title}</h3>
              <p className={`font-bold ${textColor}`}>{job.company}</p>
            </div>
            <span className="text-[10px] bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full font-black uppercase">{job.type}</span>
          </div>
          <div className={`flex flex-wrap gap-4 text-xs ${subtextColor} mb-4`}>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {job.location}
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <DollarSign className="w-3 h-3" />
              {job.salary}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {job.posted}
            </div>
          </div>
          <button className={`w-full py-3 rounded-full font-black text-sm uppercase shadow-md transition-all ${
            isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-white text-black border border-black/5 hover:bg-gray-50'
          }`}>
            Candidatar-se
          </button>
        </div>
      ))}
    </div>
  );
}

function HomeCareProfiles({ isDarkMode }: { isDarkMode: boolean }) {
  const profiles = [
    { id: 1, name: 'João Santos', role: 'Cuidador Especialista', exp: '8 anos', rating: 4.9, skills: ['Alzheimer', 'Pós-op'], avatar: 'https://picsum.photos/seed/joao/100/100' },
    { id: 2, name: 'Ana Pereira', role: 'Técnica de Enfermagem', exp: '5 anos', rating: 4.8, skills: ['Diabetes', 'Curativos'], avatar: 'https://picsum.photos/seed/ana/100/100' },
    { id: 3, name: 'Ricardo Lima', role: 'Acompanhante Senior', exp: '12 anos', rating: 5.0, skills: ['Lazer', 'Mobilidade'], avatar: 'https://picsum.photos/seed/ricardo/100/100' },
  ];

  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subtextColor = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-black uppercase mb-2 text-blue-500">Cuidadores em Destaque</h2>
      {profiles.map(profile => (
        <div key={profile.id} className={`${cardBg} p-5 rounded-[32px] shadow-sm`}>
          <div className="flex items-center gap-4 mb-4">
            <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-md" />
            <div className="flex-1">
              <h3 className={`font-black uppercase ${textColor}`}>{profile.name}</h3>
              <p className={`text-xs ${subtextColor}`}>{profile.role}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className={`text-xs font-bold ${textColor}`}>{profile.rating}</span>
                <span className={`text-[10px] ${subtextColor} ml-2`}>• {profile.exp} exp.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.skills.map(skill => (
              <span key={skill} className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase ${isDarkMode ? 'bg-black/20 text-white/70' : 'bg-gray-100 text-black/70'}`}>
                {skill}
              </span>
            ))}
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-black text-sm uppercase shadow-md hover:bg-blue-700 transition-colors">
            Ver Perfil Completo
          </button>
        </div>
      ))}
    </div>
  );
}

function HomeCareCompanies({ isDarkMode }: { isDarkMode: boolean }) {
  const companies = [
    { id: 1, name: 'Viver Bem Home Care', desc: 'Líder em cuidados domiciliares humanizados em todo o Brasil.', rating: 4.9, logo: 'https://picsum.photos/seed/viver/100/100' },
    { id: 2, name: 'Anjos da Guarda', desc: 'Especializada em acompanhamento pós-operatório e reabilitação.', rating: 4.7, logo: 'https://picsum.photos/seed/anjos/100/100' },
  ];

  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const subtextColor = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-black uppercase mb-2 text-blue-500">Empresas Parceiras</h2>
      {companies.map(company => (
        <div key={company.id} className={`${cardBg} p-5 rounded-[32px] shadow-sm`}>
          <div className="flex items-center gap-4 mb-4">
            <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-2xl shadow-md border border-white/10" />
            <div className="flex-1">
              <h3 className={`font-black uppercase ${textColor}`}>{company.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className={`text-xs font-bold ${textColor}`}>{company.rating}</span>
              </div>
            </div>
          </div>
          <p className={`text-xs leading-relaxed mb-4 ${subtextColor}`}>{company.desc}</p>
          <button className={`w-full border-2 border-blue-500 py-3 rounded-full font-black text-sm uppercase transition-all ${
            isDarkMode ? 'text-white hover:bg-blue-500' : 'text-blue-500 hover:bg-blue-500 hover:text-white'
          }`}>
            Seguir Empresa
          </button>
        </div>
      ))}
    </div>
  );
}

function MensagensView({ onBack, isDarkMode }: { onBack: () => void, isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = useState('todos'); // 'todos', 'familia', 'cuidadores', 'homecare'
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current && tabsInnerRef.current) {
      const containerWidth = tabsRef.current.offsetWidth;
      const innerWidth = tabsInnerRef.current.scrollWidth;
      setConstraints({ left: -(innerWidth - containerWidth + 48), right: 0 });
    }
  }, []);

  const chats = [
    { id: 1, name: 'Filha (Ana)', lastMsg: 'Pai, já tomou o remédio?', time: '10:30', type: 'familia', avatar: 'https://picsum.photos/seed/ana/100/100', unread: 2 },
    { id: 2, name: 'Dr. Marcos', lastMsg: 'A consulta está confirmada.', time: '09:15', type: 'cuidadores', avatar: 'https://picsum.photos/seed/marcos/100/100', unread: 0 },
    { id: 3, name: 'Maria (Cuidadora)', lastMsg: 'Estou chegando em 10 min.', time: 'Ontem', type: 'cuidadores', avatar: 'https://picsum.photos/seed/maria/100/100', unread: 0 },
    { id: 4, name: 'Home Care ABC', lastMsg: 'Relatório semanal enviado.', time: 'Ontem', type: 'homecare', avatar: 'https://picsum.photos/seed/abc/100/100', unread: 0 },
    { id: 5, name: 'Neto (Lucas)', lastMsg: 'Oi vô! Te amo!', time: 'Segunda', type: 'familia', avatar: 'https://picsum.photos/seed/lucas/100/100', unread: 0 },
  ];

  const filteredChats = activeTab === 'todos' ? chats : chats.filter(c => c.type === activeTab);

  const cardBg = isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md';
  const textColor = isDarkMode ? 'text-white' : 'text-black';

  if (selectedChat) {
    return (
      <div className="flex flex-col h-full bg-[#f0f2f5] -mx-6 -mt-4 relative" style={{ height: 'calc(100% + 1rem)' }}>
        {/* Chat Header */}
        <div className="bg-[#075e54] text-white p-4 flex items-center gap-3 shadow-md">
          <button onClick={() => setSelectedChat(null)}>
            <ChevronRight className="rotate-180 w-6 h-6" />
          </button>
          <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full border border-white/20" />
          <div className="flex-1">
            <h3 className="font-bold text-sm">{selectedChat.name}</h3>
            <p className="text-[10px] opacity-80 uppercase tracking-widest">Online</p>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
          <div className="bg-white p-3 rounded-2xl rounded-tl-none self-start max-w-[80%] shadow-sm">
            <p className="text-sm text-black">{selectedChat.lastMsg}</p>
            <span className="text-[10px] text-gray-400 block text-right mt-1">{selectedChat.time}</span>
          </div>
          <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none self-end max-w-[80%] shadow-sm">
            <p className="text-sm text-black">Oi! Tudo bem por aqui.</p>
            <span className="text-[10px] text-gray-400 block text-right mt-1">10:35</span>
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-[#f0f2f5] p-3 flex items-center gap-2 border-t border-gray-200">
          <div className="bg-white flex-1 rounded-full px-4 py-2 flex items-center shadow-sm">
            <input 
              type="text" 
              placeholder="Digite uma mensagem" 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-black w-full text-sm"
            />
          </div>
          <button className="bg-[#075e54] p-3 rounded-full shadow-md text-white">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full pt-4 ${textColor}`}>
      <button onClick={onBack} className="mb-6 flex items-center text-gray-400">
        <ChevronRight className="rotate-180 mr-2" /> Voltar
      </button>

      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-4xl font-black uppercase tracking-tighter ${textColor}`}>MENSAGENS</h1>
        <div className="bg-[#25D366] p-2 rounded-2xl shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Search */}
      <div className={`${isDarkMode ? 'bg-[#3d3d3d]/50' : 'bg-white shadow-md'} rounded-full px-6 py-3 flex items-center gap-3 mb-6`}>
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Pesquisar conversas..." 
          className={`bg-transparent border-none focus:outline-none w-full font-medium ${textColor} placeholder:text-gray-500`}
        />
      </div>

      {/* WhatsApp Style Draggable Tabs */}
      <div className="relative mb-6 -mx-6 overflow-hidden" ref={tabsRef}>
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          ref={tabsInnerRef}
          className="flex gap-2 px-6 cursor-grab active:cursor-grabbing w-max h-12 items-center"
        >
          {['todos', 'familia', 'cuidadores', 'homecare'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full whitespace-nowrap font-bold text-xs uppercase transition-all ${
                activeTab === tab 
                  ? 'bg-[#075e54] text-white shadow-md' 
                  : `${cardBg} ${textColor}`
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Chat List */}
      <div className="flex flex-col gap-1">
        {filteredChats.map(chat => (
          <motion.div
            key={chat.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedChat(chat)}
            className={`${cardBg} p-4 rounded-[24px] flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all shadow-sm`}
          >
            <div className="relative">
              <img src={chat.avatar} alt={chat.name} className="w-14 h-14 rounded-full border-2 border-[#25D366]" />
              {chat.unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#25D366] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {chat.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className={`font-black truncate uppercase text-sm ${textColor}`}>{chat.name}</h3>
                <span className="text-[10px] text-gray-400 font-bold">{chat.time}</span>
              </div>
              <p className={`text-xs truncate ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>{chat.lastMsg}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-10 bg-[#25D366] p-4 rounded-full shadow-2xl text-white z-30">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
