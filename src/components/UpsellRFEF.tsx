import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Clock, 
  Lock, 
  Shield, 
  Zap, 
  Activity, 
  Trophy, 
  Dumbbell, 
  ArrowRight,
  Flame,
  Target,
  BookOpen,
  CheckCircle2,
  Download
} from 'lucide-react';

import ebookMockupImg from '../assets/images/basketball_ebook_mockup_1784727049246.jpg';
import trainingActionImg from '../assets/images/basketball_training_action_1784727063913.jpg';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [secondsLeft, setSecondsLeft] = useState(1800); // 30:00 countdown timer for downsell urgency

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 1800;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hotmart Sales Funnel Widget Initialization
  useEffect(() => {
    const scriptId = 'hotmart-checkout-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initHotmart = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (err) {
          console.error('Hotmart Sales Funnel init error:', err);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        initHotmart();
      };
      document.body.appendChild(script);
    } else {
      initHotmart();
    }
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    const offerElem = document.getElementById('oferta-final');
    if (offerElem) {
      offerElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white font-sans pb-20">
      
      {/* Background Basketball Court Line Patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Modern Blue & Golden Ambient Glow Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ================= 1. BARRA SUPERIOR DE URGENCIA ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white py-2.5 px-4 shadow-[0_4px_25px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 sm:gap-4 border-b border-white/10">
        <span className="text-base sm:text-lg animate-pulse">🔥</span>
        <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase font-sans">
          OFERTA ESPECIAL POR TIEMPO LIMITADO
        </span>
        <div className="flex items-center gap-1.5 bg-black/30 border border-white/20 rounded-xl px-2.5 py-1 text-xs sm:text-sm font-black text-amber-300 font-mono shadow-inner">
          <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
          <span>{formatTimer(secondsLeft)}</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 space-y-10 sm:space-y-14 relative z-10">
        
        {/* Step Progress Indicator Bar (85% completed) */}
        <div className="bg-slate-900/80 border border-orange-500/30 py-3 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left rounded-2xl max-w-3xl mx-auto shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-black text-slate-200 tracking-wider uppercase">
              PASO 2 DE 3: <span className="text-amber-400 font-black">¡FALTA POCO PARA FINALIZAR!</span> TU PEDIDO PRINCIPAL YA ESTÁ RESERVADO
            </span>
          </div>
          <div className="flex items-center gap-2.5 w-full md:w-auto min-w-[180px]">
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-orange-500 via-amber-400 to-amber-300 h-full rounded-full shadow-[0_0_12px_rgba(249,115,22,0.6)]" style={{ width: '85%' }}></div>
            </div>
            <span className="text-[10px] font-mono font-black text-amber-400 shrink-0">85% COMPLETADO</span>
          </div>
        </div>

        {/* ================= 2. HERO PRINCIPAL ================= */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>OPORTUNIDAD ÚNICA DE ACCESO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase">
            ¡ESPERA! TENEMOS UNA ÚLTIMA OPORTUNIDAD PARA TI
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Mejora la preparación física de tus jugadores y lleva su rendimiento en la cancha al siguiente nivel con un sistema completo de entrenamiento para baloncesto.
          </p>

          <div className="pt-2">
            <div className="inline-block bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 border border-orange-500/40 rounded-2xl px-6 py-3.5 shadow-lg">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">ACCESO AL MANUAL OFICIAL</span>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-amber-400 uppercase tracking-wide">
                PREPARACIÓN FÍSICA COMPLETA PARA EL BALONCESTO POR SOLO $ 4.90 USD
              </h2>
            </div>
          </div>

        </div>

        {/* ================= 3. SECCIÓN DE OPORTUNIDAD ESPECIAL ================= */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-orange-950/30 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              💡 NOTA ESPECIAL PARA TI
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium italic">
              "Sabemos que quizás la oferta anterior no era lo que estabas buscando en este momento. Por eso, hemos preparado una opción más accesible para que puedas comenzar a mejorar tu preparación física y la de tu equipo."
            </p>
          </div>
        </div>

        {/* ================= 4. ¿QUÉ RECIBIRÁS? Y PRODUCTO MOCKUP ================= */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-8">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">CONTENIDO EXCLUSIVO DIGITAL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
              ¿QUÉ RECIBIRÁS CON ESTA OFERTA?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Product Mockup Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div className="relative group w-full max-w-md rounded-2xl bg-slate-950 p-2.5 border border-orange-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-amber-400/50">
                <img 
                  src="https://i.postimg.cc/5yhDtSc7/Chat-GPT-Image-19-de-jul-de-2026-01-43-27.png" 
                  alt="Preparación Física Completa para el Baloncesto" 
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] text-slate-400 font-mono text-center flex items-center gap-1.5">
                📘 Manual Digital de Acceso Inmediato
              </span>
            </div>

            {/* List of What You Will Receive */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                { title: "Entrenamientos prácticos", desc: "Rutinas paso a paso diseñadas específicamente para el baloncesto." },
                { title: "Planes de preparación física", desc: "Estructuras organizadas para aplicar semana a semana con tu equipo." },
                { title: "Ejercicios progresivos", desc: "Adaptados para diferentes niveles de exigencia y categorías." },
                { title: "Consejos para mejorar el rendimiento", desc: "Estrategias para optimizar la respuesta física en momentos decisivos." },
                { title: "Acceso digital inmediato", desc: "Descargas instantáneamente todo el material directamente a tu dispositivo." }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 bg-slate-950/80 border border-slate-800 hover:border-orange-500/40 p-4 rounded-2xl transition-all"
                >
                  <div className="h-7 w-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">{item.title}</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= 5. BENEFICIOS PRINCIPALES ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">PILARES DE RENDIMIENTO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">BENEFICIOS PRINCIPALES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Beneficio 1 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">Fuerza explosiva</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Desarrolla potencia en saltos, rebotes y ganancia de contactos físicos en la pintura.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">Velocidad y agilidad</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aumenta la rapidez de pies, desplazamientos laterales y velocidad en transiciones ofensivas.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">Resistencia y condición</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Capacidad para mantener la máxima intensidad defensiva y efectividad hasta el último cuarto.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">Mejor rendimiento en la cancha</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traduce el trabajo de preparación física directamente en mejores resultados de juego.
              </p>
            </div>

          </div>
        </div>

        {/* ================= 6. BLOCO DE OFERTA ================= */}
        <div id="oferta-final" className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-400 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(249,115,22,0.25)] space-y-6 max-w-3xl mx-auto">
          
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-pulse mx-auto">
              ⚡ OPORTUNIDAD ÚNICA Y EXCLUSIVA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight">
              ACCEDE AHORA A PREPARACIÓN FÍSICA COMPLETA
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Consigue el manual digital completo por un precio único de recuperación de oferta, diseñado para que puedas empezar a transformar el físico de tus jugadores hoy mismo.
            </p>
          </div>

          {/* Price Callout ($4.90 USD) */}
          <div className="py-6 border-y border-white/10 max-w-md mx-auto space-y-2 bg-slate-950/60 rounded-2xl p-4">
            <span className="text-xs text-slate-400 uppercase font-mono tracking-widest block">
              PRECIO ESPECIAL ÚNICO
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-7xl font-black text-amber-400 font-mono tracking-tight drop-shadow-md">
                $4.90
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">
                USD
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              (Pago único • Sin cobros mensuales • Acceso digital de por vida)
            </p>
          </div>

          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel" className="my-4 min-h-[50px]"></div>

          {/* Main CTA Button */}
          <div className="space-y-4 max-w-md mx-auto">
            {/* Below Button Indicators */}
            <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Acceso inmediato • Pago seguro • Contenido digital
            </p>
          </div>

        </div>

        {/* ================= 7. GARANTÍA ================= */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="h-20 w-20 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
            <Shield className="h-10 w-10 stroke-[1.75]" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                🛡️ GARANTÍA DE 7 DÍAS
              </span>
            </div>
            <h3 className="text-xl font-black text-white uppercase">
              COMPRA SIN RIESGO
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prueba el contenido y descubre cómo puede ayudarte a mejorar la preparación física y el rendimiento en la cancha. Cuentas con 7 días de garantía sin preguntas.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
