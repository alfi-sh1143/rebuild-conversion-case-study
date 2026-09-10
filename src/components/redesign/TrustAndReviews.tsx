import React from 'react';
import { VERIFIED_REVIEWS } from '../../data/plumbingData';
import { Star, ShieldCheck, CheckCircle2, Award, ThumbsUp, HeartHandshake } from 'lucide-react';

export const TrustAndReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
            Social Proof & Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by 1,240+ Local Homeowners
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real reviews from verified residents. We maintain an aggregate 4.9/5.0 rating because we treat your home with the same respect we’d treat our own parents’ house.
          </p>
        </div>

        {/* 3 Core Guarantees Banner */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">100% Satisfaction Guarantee</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                If the repair doesn’t hold or you aren’t 100% satisfied with our workmanship, we return and make it right at zero additional cost.
              </p>
            </div>
          </div>

          <div className="p-5 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Upfront Price Lock</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                The quote we give you before starting the work is the price you pay. Never any surprise "overtime" fees or unexpected supply markups.
              </p>
            </div>
          </div>

          <div className="p-5 bg-amber-50/70 border border-amber-100 rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Clean Home Pledge</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Shoe covers, floor protector runners, and complete clean-up of the work area before we pack our tools. We leave zero debris behind.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Verified Job
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{review.author}</span>
                  <span className="text-slate-400">{review.date}</span>
                </div>
                <div className="text-[11px] text-blue-600 font-medium mt-0.5">
                  {review.service} • {review.suburb}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Dispatched: {review.technician}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
