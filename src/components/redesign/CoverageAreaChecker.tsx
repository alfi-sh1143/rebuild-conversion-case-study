import React, { useState } from 'react';
import { SERVICE_AREAS } from '../../data/plumbingData';
import { MapPin, Search, CheckCircle2, Clock, Truck, ShieldAlert } from 'lucide-react';

export const CoverageAreaChecker: React.FC = () => {
  const [zipInput, setZipInput] = useState<string>('78704');
  const [searchResult, setSearchResult] = useState<typeof SERVICE_AREAS[0] | null>(SERVICE_AREAS[1]);
  const [searched, setSearched] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    const found = SERVICE_AREAS.find((area) => area.zip === cleanZip || area.name.toLowerCase().includes(cleanZip.toLowerCase()));
    setSearchResult(found || null);
    setSearched(true);
  };

  const selectPredefinedZip = (zip: string) => {
    setZipInput(zip);
    const found = SERVICE_AREAS.find((area) => area.zip === zip);
    setSearchResult(found || null);
    setSearched(true);
  };

  return (
    <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              Fast Dispatch Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Is a ClearFlow Truck Near Your Neighborhood Right Now?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We operate a decentralized fleet of fully-stocked mobile plumbing workshops positioned across the metropolitan area for emergency 45-minute arrival.
            </p>

            {/* Zip code input form */}
            <form onSubmit={handleSearch} className="mt-8 flex gap-2 max-w-md">
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Enter 5-digit ZIP or Suburb"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Search className="w-4 h-4" />
                <span>Check ETA</span>
              </button>
            </form>

            {/* Quick zip pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400">Popular ZIPs:</span>
              {SERVICE_AREAS.slice(0, 4).map((area) => (
                <button
                  key={area.zip}
                  onClick={() => selectPredefinedZip(area.zip)}
                  className={`px-2.5 py-1 rounded-lg font-mono font-medium transition cursor-pointer border ${
                    zipInput === area.zip
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {area.zip}
                </button>
              ))}
            </div>
          </div>

          {/* Right Live Status Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              {searched && searchResult ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        ✓ Primary Service Zone Verified
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-2">
                        {searchResult.name} (ZIP {searchResult.zip})
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Truck className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-400 block mb-1">Estimated Arrival</span>
                      <div className="text-2xl font-black text-slate-900 font-mono">
                        {searchResult.eta}
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Emergency on-call
                      </span>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                      <span className="text-slate-400 block mb-1">Active Trucks in Area</span>
                      <div className="text-2xl font-black text-blue-700 font-mono">
                        {searchResult.activeTechs} Trucks
                      </div>
                      <span className="text-[11px] text-blue-600 font-semibold mt-1">
                        Fully stocked with parts
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Guaranteed Arrival Rate</span>
                      <p className="text-[11px] text-amber-900 mt-0.5 leading-relaxed">
                        If our technician does not arrive within the confirmed window, we deduct $50 from your final repair invoice automatically.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <ShieldAlert className="w-12 h-12 text-amber-500 mx-auto" />
                  <h4 className="font-bold text-slate-900 text-base">ZIP Code Located Outside Central Core</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    We still service extended counties! Call our dispatch desk at <strong className="text-slate-900">(512) 555-FLOW</strong> to verify same-day truck availability in your sector.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
