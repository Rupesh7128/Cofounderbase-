import React, { useState } from 'react';
import { MOCK_FOUNDERS } from '../constants';
import { ViewMode } from '../types';
import { Search, MapPin, Briefcase, Star, Heart, MessageCircle, Share2, ShieldCheck, GraduationCap, Scale, Clock, Award, ArrowRight } from 'lucide-react';

export const AppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewMode>(ViewMode.DIRECTORY);
  const [selectedFounder, setSelectedFounder] = useState(MOCK_FOUNDERS[0]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-dark-surface p-1.5 rounded-full border border-gray-800 flex gap-1 shadow-2xl">
          {[
            { id: ViewMode.DIRECTORY, label: 'Founder Directory' },
            { id: ViewMode.PROFILE, label: 'Deep Profile' },
            { id: ViewMode.MATCHING, label: 'Smart Match' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ViewMode)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-brand-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Window */}
      <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-gray-800 min-h-[700px] flex flex-col relative">
        {/* Window Header */}
        <div className="h-12 border-b border-gray-800 flex items-center px-4 gap-2 bg-black/40 backdrop-blur-md sticky top-0 z-20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 font-mono">
            cofounderbase.com/app
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-dark-bg relative overflow-y-auto custom-scrollbar">
          
          {/* VIEW: DIRECTORY */}
          {activeTab === ViewMode.DIRECTORY && (
            <div className="animate-fadeIn p-6">
              <div className="flex flex-col items-center mb-10 mt-4">
                <h2 className="text-2xl font-bold text-white mb-6">Discover Your Future Partner</h2>
                <div className="relative w-full max-w-xl group">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-xl group-hover:bg-brand-500/30 transition-all duration-500"></div>
                  <div className="relative bg-dark-surface border border-gray-700 rounded-full flex items-center px-6 py-4 shadow-xl">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input 
                      type="text" 
                      placeholder="Search by skills (e.g., 'React', 'FinTech'), role, or location..." 
                      className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_FOUNDERS.map((founder) => (
                  <div 
                    key={founder.id}
                    onClick={() => { setSelectedFounder(founder); setActiveTab(ViewMode.PROFILE); }}
                    className="group bg-dark-surface/50 hover:bg-brand-900/10 border border-gray-800 hover:border-brand-500/50 p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-brand-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <img src={founder.image} alt={founder.name} className="w-20 h-20 rounded-2xl object-cover shadow-lg border border-gray-700" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                          {founder.name}
                          {founder.matchScore && (
                            <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">
                              {founder.matchScore}% Match
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-brand-400 mb-2 font-medium">{founder.role}</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                          <MapPin className="w-3 h-3" /> {founder.location}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {founder.skills.slice(0, 3).map(skill => (
                            <span key={skill} className="text-[10px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW: PROFILE */}
          {activeTab === ViewMode.PROFILE && (
            <div className="animate-fadeIn min-h-full bg-dark-bg">
              <div className="sticky top-0 z-10 bg-dark-bg/95 backdrop-blur border-b border-gray-800 p-4 flex justify-between items-center">
                <button onClick={() => setActiveTab(ViewMode.DIRECTORY)} className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-4 h-4 rotate-180" /> Back to Directory
                </button>
                <div className="flex gap-3">
                  <button className="p-2 text-gray-400 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-brand-600/20">
                    Connect Request
                  </button>
                </div>
              </div>

              <div className="p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Stats & Basics */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="relative inline-block">
                        <img src={selectedFounder.image} alt={selectedFounder.name} className="w-48 h-48 rounded-full object-cover border-4 border-dark-surface shadow-2xl mx-auto mb-4" />
                        <div className="absolute bottom-4 right-4 bg-brand-500 text-white p-2 rounded-full border-4 border-dark-surface shadow-lg" title="Verified Founder">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-white">{selectedFounder.name}</h2>
                      <p className="text-brand-400 font-medium mb-1">{selectedFounder.role}</p>
                      <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3" /> {selectedFounder.location}
                      </p>
                    </div>

                    <div className="bg-dark-surface rounded-xl border border-gray-800 p-4 space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                        <span className="text-sm text-gray-400">Commitment</span>
                        <span className="text-sm text-white font-medium">{selectedFounder.commitmentLevel}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
                        <span className="text-sm text-gray-400">Equity Ask</span>
                        <span className="text-sm text-white font-medium">{selectedFounder.equityExpectation}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Last Active</span>
                        <span className="text-sm text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Now
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Detailed Info */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Bio */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-brand-500" /> About
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base bg-white/5 p-4 rounded-xl border border-white/5">
                        {selectedFounder.bio}
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-brand-500" /> Experience
                      </h3>
                      <div className="space-y-4">
                        {selectedFounder.experience.map((exp, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 font-bold text-xs shrink-0">
                              {exp.company.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{exp.role}</h4>
                              <div className="text-sm text-gray-400">{exp.company} • {exp.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills & Education */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4" /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedFounder.skills.map(skill => (
                            <span key={skill} className="px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-300 text-xs border border-brand-500/20 font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                       </div>
                       <div>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" /> Education
                        </h3>
                        <div className="text-sm text-gray-300 bg-dark-surface p-3 rounded-lg border border-gray-800">
                          {selectedFounder.education}
                        </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: MATCHING */}
          {activeTab === ViewMode.MATCHING && (
            <div className="animate-fadeIn p-8 min-h-full flex flex-col items-center">
              <div className="relative mb-10 mt-8">
                <div className="absolute inset-0 bg-brand-500/30 rounded-full blur-[60px] animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-b from-dark-surface to-black p-10 rounded-full border border-brand-500/50 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                  <Heart className="w-20 h-20 text-brand-500 fill-brand-500 animate-pulse drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  98% Compatible
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-3 text-center">It's a Match!</h2>
              <p className="text-gray-400 max-w-lg text-center mb-10 leading-relaxed">
                Based on our 50-point analysis, you and <span className="text-white font-semibold">Elena</span> have highly complementary working styles and aligned vision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-10">
                <div className="bg-dark-surface border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-brand-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                    <Scale className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">Vision</div>
                  <div className="text-sm text-gray-500">Shared goal for global scale</div>
                  <div className="mt-3 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[95%]"></div>
                  </div>
                </div>

                <div className="bg-dark-surface border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-brand-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-3">
                     <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">Skills</div>
                  <div className="text-sm text-gray-500">Perfectly Complementary</div>
                   <div className="mt-3 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[100%]"></div>
                  </div>
                </div>

                <div className="bg-dark-surface border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-brand-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-3">
                    <Clock className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">Timing</div>
                  <div className="text-sm text-gray-500">Both ready Full-time</div>
                   <div className="mt-3 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-pink-500 h-full w-[90%]"></div>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-brand-400 hover:text-white transition-colors group">
                <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-brand-500/30 group-hover:decoration-brand-500 underline-offset-4">Share this match report</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};