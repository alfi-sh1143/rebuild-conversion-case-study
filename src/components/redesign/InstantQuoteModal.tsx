import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Phone, Clock, ShieldCheck, MapPin, Calculator, Sparkles } from 'lucide-react';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Emergency Leak & Burst Pipe Repair',
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(preselectedService);
  const [urgency, setUrgency] = useState<'emergency' | 'today' | 'this-week' | 'planning'>('emergency');
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [zipCode, setZipCode] = useState<string>('78704');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const serviceEstimates: Record<string, { range: string; time: string; feeWaived: boolean }> = {
    'Emergency Leak & Burst Pipe Repair': { range: '$149 – $280', time: '45 Mins', feeWaived: true },
    'Water Heater Repair & Replacement': { range: '$189 – $450 (repairs)', time: 'Same-day', feeWaived: true },
    'Hydro-Jetting & Drain Clearing': { range: '$99 – $220', time: '1-2 Hours', feeWaived: true },
    'Sewer Line Camera Inspection & Repair': { range: '$129 – $310', time: 'Today', feeWaived: true },
    'Fixture Installation & Kitchen Remodel': { range: '$119 – $260', time: 'Scheduled', feeWaived: true },
    'Whole-Home PEX / Copper Repiping': { range: '$1,850 – $3,900', time: '2-3 Days', feeWaived: true },
  };

  const currentEstimate = serviceEstimates[selectedService] || {
    range: '$129 – $250',
    time: '45 Mins',
    feeWaived: true,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden relative">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase mb-1">
            <Calculator className="w-4 h-4" /> 60-Second Instant Upfront Quote
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {isSubmitted ? 'Technician Dispatched!' : 'Get Real Pricing & Available Windows'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isSubmitted
              ? 'Your booking is confirmed with our on-call master plumber.'
              : 'Zero obligation. Free estimate generated with upfront flat-rates.'}
          </p>

          {/* Step Progress Bar */}
          {!isSubmitted && (
            <div className="mt-4 flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    s <= step ? 'bg-amber-400' : 'bg-slate-700'
                  }`}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Priority Dispatch Confirmed
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">We’re On Our Way!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-1">
                  Master Technician <strong className="text-slate-900">Dave Miller (Truck #4)</strong> has accepted your job.
                </p>
              </div>

              {/* Simulated Dispatch Tracker Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Estimated Arrival:</span>
                  <span className="text-emerald-700 font-bold font-mono text-sm">35 - 45 Minutes</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Service Requested:</span>
                  <span className="text-slate-900 font-semibold">{selectedService}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Upfront Price Estimate:</span>
                  <span className="text-blue-700 font-mono font-bold text-sm">{currentEstimate.range}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 text-[11px]">
                  <span>Diagnostic Fee:</span>
                  <span className="text-emerald-600 font-bold">Waived with repair ($0)</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Need to speak with Dave directly right now?</strong>
                  <p className="text-[11px] text-amber-800 mt-0.5">Call dispatch line (512) 555-FLOW with reference #CF-8921</p>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-sm transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Step 1: Select Your Plumbing Need
                    </label>
                    <span className="text-xs text-slate-400">Step 1 of 3</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {Object.keys(serviceEstimates).map((serviceName) => (
                      <button
                        key={serviceName}
                        type="button"
                        onClick={() => setSelectedService(serviceName)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                          selectedService === serviceName
                            ? 'bg-blue-50/80 border-blue-600 text-blue-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="font-bold leading-tight">{serviceName}</span>
                        <span className="text-[11px] font-mono font-semibold text-blue-600 mt-2">
                          Est: {serviceEstimates[serviceName].range}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer transition shadow-sm"
                    >
                      Next: Choose Urgency
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Urgency & Property Type */}
              {step === 2 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Step 2: Urgency & Arrival Window
                    </label>
                    <span className="text-xs text-slate-400">Step 2 of 3</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { id: 'emergency', label: '🚨 Emergency (Active Leak/Flooding - Dispatch in 45 min)', badge: 'Fastest' },
                      { id: 'today', label: '⚡ Today (Within Next 2-4 Hours)', badge: 'Same Day' },
                      { id: 'this-week', label: '📅 This Week (Scheduled Maintenance or Install)', badge: 'Flexible' },
                      { id: 'planning', label: '🔍 Planning & Comparing Estimates for Remodel', badge: 'Quote Only' },
                    ].map((urg) => (
                      <button
                        key={urg.id}
                        type="button"
                        onClick={() => setUrgency(urg.id as any)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${
                          urgency === urg.id
                            ? 'bg-amber-50 border-amber-500 text-amber-950 font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{urg.label}</span>
                        <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded font-mono">
                          {urg.badge}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Property type toggle */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">Property Type</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setPropertyType('residential')}
                        className={`py-2 rounded-lg font-semibold border ${
                          propertyType === 'residential'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        Residential Home / Condo
                      </button>
                      <button
                        type="button"
                        onClick={() => setPropertyType('commercial')}
                        className={`py-2 rounded-lg font-semibold border ${
                          propertyType === 'commercial'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        Commercial / Multi-Unit
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer transition shadow-sm"
                    >
                      Next: Contact & Price
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Live Price Calculation */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Step 3: Location & Instant Price Guarantee
                    </label>
                    <span className="text-xs text-slate-400">Step 3 of 3</span>
                  </div>

                  {/* Calculated Price Showcase Box */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider block">
                        Estimated Upfront Cost
                      </span>
                      <div className="text-2xl font-extrabold text-slate-900 font-mono">
                        {currentEstimate.range}
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                        ✓ $49 diagnostic fee waived upon repair
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase block">ETA</span>
                      <span className="text-xs font-bold text-slate-800 font-mono bg-white px-2 py-1 rounded border border-blue-100">
                        {currentEstimate.time}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number (For Tech ETA) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(512) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Austin Zip Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 78704"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs flex items-center gap-2 cursor-pointer transition shadow-md"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Lock In Price & Confirm Booking</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
