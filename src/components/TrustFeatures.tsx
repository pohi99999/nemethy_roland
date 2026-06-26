import React from 'react';
import { ShieldCheck, Calculator, FileText } from 'lucide-react';

export default function TrustFeatures() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Jogi és Szerződéses Biztonság",
      description: "Stabil back-office támogatás, precíz elszámolás és szerződéses garanciák."
    },
    {
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      title: "Kiszámítható Árképzés",
      description: "Rejtett költségek nélküli, transzparens árajánlatok és fix díjas konstrukciók."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Kártérítési Felelősségvállalás",
      description: "Minden fuvarunk teljes körű árubiztosítással és felelősségvállalással történik."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
      {/* Finom dekoratív körök a háttérben */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-100/50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Miért minket válasszon partneréül?
          </h2>
          <p className="text-slate-600">
            A Némethy Roland fuvarozás a pontosság és a megbízhatóság garanciáját nyújtja B2B ügyfeleinek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Ikon konténer */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <span className="group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(feature.icon, {
                    className: "w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                  })}
                </span>
              </div>
              
              {/* Cím */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Leírás */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
