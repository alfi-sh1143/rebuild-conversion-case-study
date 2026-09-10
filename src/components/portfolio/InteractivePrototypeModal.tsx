import React, { useState } from 'react';
import { ProjectItem } from '../../config/portfolioConfig';
import { X, ExternalLink, Sparkles, CheckCircle2, Calculator, ShieldCheck, Cpu, Calendar, Clock, Phone } from 'lucide-react';

interface InteractivePrototypeModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenClearFlowFullApp?: () => void;
}

export const InteractivePrototypeModal: React.FC<InteractivePrototypeModalProps> = ({
  project,
  onClose,
  onOpenClearFlowFullApp,
}) => {
  // Apex Roofing State
  const [roofPitch, setRoofPitch] = useState<'low' | 'standard' | 'steep'>('standard');
  const [roofMaterial, setRoofMaterial] = useState<'asphalt' | 'metal' | 'tile'>('asphalt');
  const [sqFootage, setSqFootage] = useState<number>(2400);

  // FlowDesk AI State
  const [selectedModel, setSelectedModel] = useState<'gemini' | 'claude' | 'gpt'>('gemini');
  const [temperature, setTemperature] = useState<number>(0.7);
  const [promptText, setPromptText] = useState<string>('Refactor this UI component to use CSS grid and ensure WCAG AAA contrast.');
  const [isSimulatingRun, setIsSimulatingRun] = useState<boolean>(false);

  // NovaCare State
  const [selectedSymptom, setSelectedSymptom] = useState<string>('General Consultation');
  const [visitType, setVisitType] = useState<'telehealth' | 'in-person'>('telehealth');
  const [selectedSlot, setSelectedSlot] = useState<string>('2:30 PM Today');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  if (!project) return null;

  // Calculate Apex Roof Price
  const materialMultipliers: Record<string, number> = { asphalt: 4.8, metal: 9.2, tile: 11.5 };
  const pitchMultipliers: Record<string, number> = { low: 1.0, standard: 1.15, steep: 1.35 };
  const calculatedEstimate = Math.round(sqFootage * materialMultipliers[roofMaterial] * pitchMultipliers[roofPitch]);
  const calculatedMonthly = Math.round(calculatedEstimate / 84);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs text-cyan-300 font-bold uppercase">
              Interactive Prototype Sandbox
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <h3 className="text-sm font-bold text-white truncate hidden sm:inline">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.id === 'clearflow-plumbing' && onOpenClearFlowFullApp && (
              <button
                onClick={() => {
                  onClose();
                  onOpenClearFlowFullApp();
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Full Multi-Screen App</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Prototype Sandbox Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* APEX ROOFING PROTOTYPE */}
          {project.id === 'apex-roofing' && (
            <div className="space-y-6 font-sans">
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-amber-400 font-mono text-xs font-bold uppercase">Apex Roofing Prototype</span>
                  <h4 className="text-2xl font-black mt-1">Instant Roof Cost & Material Estimator</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Eliminating contractor price opacity with real-time square footage calculation.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Est. Total Investment:</span>
                  <span className="text-3xl font-black text-amber-400 font-mono">
                    ${calculatedEstimate.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-300 block font-mono">
                    or from <strong>${calculatedMonthly}/mo</strong> with 0% APR financing
                  </span>
                </div>
              </div>

              {/* Interactive Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* 1. Material Selector */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="font-bold text-slate-800 block">1. Shingle Material</label>
                  <div className="space-y-1.5">
                    {[
                      { id: 'asphalt', name: 'Architectural Asphalt (30-Yr)', rate: 'Standard' },
                      { id: 'metal', name: 'Standing Seam Metal (50-Yr)', rate: 'Premium' },
                      { id: 'tile', name: 'Spanish Barrel Tile (Lifetime)', rate: 'Luxury' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setRoofMaterial(m.id as any)}
                        className={`w-full text-left p-2.5 rounded-lg border transition ${
                          roofMaterial === m.id
                            ? 'bg-amber-50 border-amber-500 font-bold text-amber-950'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex justify-between">
                          <span>{m.name}</span>
                          <span className="text-[10px] text-slate-400">{m.rate}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Roof Pitch */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="font-bold text-slate-800 block">2. Roof Incline / Pitch</label>
                  <div className="space-y-1.5">
                    {[
                      { id: 'low', name: 'Low Pitch (Walkable 4/12)' },
                      { id: 'standard', name: 'Standard Colonial (6/12 - 8/12)' },
                      { id: 'steep', name: 'Steep Victorian (9/12+)' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setRoofPitch(p.id as any)}
                        className={`w-full text-left p-2.5 rounded-lg border transition ${
                          roofPitch === p.id
                            ? 'bg-amber-50 border-amber-500 font-bold text-amber-950'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Square Footage Slider */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>3. Home Size:</span>
                      <span className="font-mono text-blue-700">{sqFootage} sq ft</span>
                    </div>
                    <input
                      type="range"
                      min="1200"
                      max="5000"
                      step="100"
                      value={sqFootage}
                      onChange={(e) => setSqFootage(Number(e.target.value))}
                      className="w-full mt-3 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1,200 sq ft</span>
                      <span>5,000 sq ft</span>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Simulated Booking: Drone scan requested for ${sqFootage} sq ft roof.`)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg text-xs"
                  >
                    Schedule Free Drone Scan
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* FLOWDESK AI PROTOTYPE */}
          {project.id === 'flowdesk-ai' && (
            <div className="space-y-6">
              <div className="bg-slate-950 text-white p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-cyan-400 font-mono text-xs font-bold uppercase">FlowDesk AI Prototype</span>
                  <h4 className="text-2xl font-black mt-1">Multi-Model Orchestration Canvas</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Keyboard-first prompt engineering workspace with synchronized latency HUD.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-mono text-xs">
                    Live Stream: 88 tokens/s
                  </span>
                </div>
              </div>

              {/* 3-Way Model Selector & Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'gemini', name: 'Gemini 2.5 Flash', latency: '210ms', cost: '$0.00015/1k' },
                  { id: 'claude', name: 'Claude 3.5 Sonnet', latency: '430ms', cost: '$0.003/1k' },
                  { id: 'gpt', name: 'GPT-4o Omnimodel', latency: '380ms', cost: '$0.0025/1k' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id as any)}
                    className={`p-3 rounded-xl border text-left transition ${
                      selectedModel === m.id
                        ? 'bg-cyan-50 border-cyan-500 font-bold text-cyan-950 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{m.name}</span>
                      <span className="font-mono text-[10px] text-slate-500">{m.latency}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                      Cost: {m.cost}
                    </span>
                  </button>
                ))}
              </div>

              {/* Prompt Editor & Simulated Completion */}
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs space-y-3">
                <div className="flex justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span>SYSTEM PROMPT (Editable)</span>
                  <span>Temperature: {temperature}</span>
                </div>
                <textarea
                  rows={3}
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(Number(e.target.value))}
                      className="w-24 cursor-pointer"
                    />
                    <span className="text-[10px] text-slate-400">Creativity / Temp</span>
                  </div>

                  <button
                    onClick={() => {
                      setIsSimulatingRun(true);
                      setTimeout(() => setIsSimulatingRun(false), 800);
                    }}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
                  >
                    {isSimulatingRun ? 'Streaming Tokens...' : 'Run Synchronized Prompt (⌘+↵)'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOVACARE PROTOTYPE */}
          {project.id === 'novacare' && (
            <div className="space-y-6">
              <div className="bg-teal-900 text-white p-6 rounded-2xl border border-teal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-teal-200 font-mono text-xs font-bold uppercase">NovaCare Health Prototype</span>
                  <h4 className="text-2xl font-black mt-1">Calm & Accessible Patient Triage</h4>
                  <p className="text-xs text-teal-100 mt-1">
                    WCAG AAA contrast, 18px base readability, and guaranteed $20 co-pay transparency.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-teal-200 block">Insurance Co-Pay:</span>
                  <span className="text-3xl font-black text-white font-mono">$20.00</span>
                  <span className="text-[11px] text-teal-200 block">Aetna, BCBS, Medicare In-Network</span>
                </div>
              </div>

              {bookingConfirmed ? (
                <div className="p-8 text-center bg-teal-50 rounded-2xl border border-teal-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                  <h4 className="text-xl font-bold text-teal-950">Appointment Confirmed!</h4>
                  <p className="text-xs text-teal-800 max-w-md mx-auto">
                    A secure, 1-tap video consultation link has been sent to your mobile phone. No password or app download required.
                  </p>
                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="mt-4 bg-teal-800 text-white font-bold text-xs px-4 py-2 rounded-xl"
                  >
                    Reset Demo
                  </button>
                </div>
              ) : (
                <div className="space-y-4 text-xs">
                  {/* Step 1: Visit Type */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setVisitType('telehealth')}
                      className={`p-4 rounded-xl border text-left transition ${
                        visitType === 'telehealth'
                          ? 'bg-teal-50 border-teal-600 font-bold text-teal-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="text-sm block">🎥 Video Telehealth Consultation</span>
                      <span className="text-[11px] text-slate-500 mt-1 block">Connect from smartphone or laptop in 15 mins</span>
                    </button>
                    <button
                      onClick={() => setVisitType('in-person')}
                      className={`p-4 rounded-xl border text-left transition ${
                        visitType === 'in-person'
                          ? 'bg-teal-50 border-teal-600 font-bold text-teal-950 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="text-sm block">🏥 In-Clinic Physical Examination</span>
                      <span className="text-[11px] text-slate-500 mt-1 block">Austin Central Health Hub (Floor 3)</span>
                    </button>
                  </div>

                  {/* Step 2: Time Slot Selector */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <label className="font-bold text-slate-800 block mb-2">Available Slots with Dr. Elena Vasquez, MD:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['1:15 PM Today', '2:30 PM Today', '4:00 PM Today'].map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-xl border text-center font-bold transition ${
                            selectedSlot === slot
                              ? 'bg-teal-700 text-white border-teal-700'
                              : 'bg-white text-slate-800 border-slate-200'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Confirm CTA */}
                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full bg-teal-800 hover:bg-teal-700 text-white font-bold py-3 rounded-xl text-sm transition"
                  >
                    Confirm {visitType === 'telehealth' ? 'Video Telehealth' : 'In-Clinic'} Appointment for {selectedSlot}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* CLEARFLOW PLUMBING PROTOTYPE */}
          {project.id === 'clearflow-plumbing' && (
            <div className="space-y-6">
              <div className="bg-blue-950 text-white p-6 rounded-2xl border border-blue-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-cyan-400 font-mono text-xs font-bold uppercase">ClearFlow Plumbing Prototype</span>
                  <h4 className="text-2xl font-black mt-1">High-Conversion Trade Redesign</h4>
                  <p className="text-xs text-blue-200 mt-1">
                    Complete responsive web application with 60-second quote calculator, before/after slider, and legacy 2008 audit.
                  </p>
                </div>
                {onOpenClearFlowFullApp && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenClearFlowFullApp();
                    }}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-5 py-3 rounded-xl text-xs flex items-center gap-2 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Launch Full Interactive App</span>
                  </button>
                )}
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-4">
                <span className="font-bold text-slate-900 block text-sm">Interactive Features Included in This Project:</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block">1. 60-Sec Quote Modal</span>
                    <span className="text-slate-500 text-[11px]">3-step calculator with live price range & dispatch confirmation.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block">2. Before/After Drag Slider</span>
                    <span className="text-slate-500 text-[11px]">Interactive comparison of corroded pipes vs PEX manifold.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block">3. 2008 Legacy Site Inspector</span>
                    <span className="text-slate-500 text-[11px]">Pulsing pins breaking down 8 heuristic flaws.</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  {onOpenClearFlowFullApp && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenClearFlowFullApp();
                      }}
                      className="text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      Click here to enter the ClearFlow Live Redesign & Case Study Hub →
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
