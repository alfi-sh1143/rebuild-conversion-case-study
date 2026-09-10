import React from 'react';
import { CLEARFLOW_SERVICES } from '../../data/plumbingData';
import { PlumbingService } from '../../types';
import { CheckCircle2, Clock, AlertTriangle, ArrowRight, Wrench, Flame, Eye, Droplets, Layers } from 'lucide-react';

interface ServiceCardsProps {
  onSelectService: (serviceName: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-rose-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-500" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-purple-500" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-cyan-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-500" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
              Transparent Flat-Rate Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Honest Plumbing Services with Upfront Pricing
            </h2>
            <p className="mt-3 text-base text-slate-600">
              No guessing, no mysterious hourly clock-milking. You receive a firm price before any wrench touches your pipe.
            </p>
          </div>

          <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-2 self-start">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>
              <strong>Diagnostic Fee:</strong> $49 standard (Waived 100% when you approve service)
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLEARFLOW_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon & Emergency Badge */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                      Starting At
                    </span>
                    <span className="text-xl font-extrabold text-slate-900 font-mono">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Service Title & Badges */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    {service.isEmergency && (
                      <span className="text-[10px] font-bold uppercase bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                        24/7 Priority
                      </span>
                    )}
                    <span className="text-[10px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> {service.avgTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-blue-600 transition">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    What's Included
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer group-hover:bg-blue-600 group-hover:text-white"
                >
                  <span>Book or Estimate This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
