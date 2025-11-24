
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Camera, Wifi, MessageSquare, Globe, ArrowRight, User, Star, Clock, Share2, CheckCircle, Bot, Search, Edit3, BarChart3, MapPin } from 'lucide-react';

// --- DATA FLOW DIAGRAM ---
export const DataFlowDiagram = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl mx-auto gap-8">
       {/* Column 1: Sources */}
       <div className="flex flex-col gap-4 w-1/4">
          <h3 className="text-center font-bold text-brand-red uppercase text-sm mb-4">Nguồn Dữ Liệu</h3>
          {[
              { icon: ShoppingCart, label: "POS Events" },
              { icon: Camera, label: "Camera AI" },
              { icon: Wifi, label: "Wifi Marketing" },
              { icon: MessageSquare, label: "Chat Channels" },
              { icon: Globe, label: "Website Behavior" },
          ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm z-10 relative"
              >
                  <item.icon size={20} className="text-stone-500" />
                  <span className="font-medium text-stone-700 text-sm">{item.label}</span>
                  {/* Moving Particle */}
                  <motion.div 
                    className="absolute right-0 top-1/2 w-3 h-3 bg-brand-red rounded-full"
                    animate={{ 
                        x: [0, 150], 
                        opacity: [1, 0],
                        scale: [1, 0.5]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: i * 0.5 
                    }}
                  />
              </motion.div>
          ))}
       </div>

       {/* Column 2: Platform */}
       <div className="flex flex-col gap-4 w-1/3 items-center">
            <h3 className="text-center font-bold text-brand-red uppercase text-sm mb-4">Hilab Ecosystem</h3>
            <div className="w-full bg-stone-900 rounded-2xl p-6 text-white shadow-xl border-4 border-brand-red/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/10 animate-pulse"></div>
                <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                    <div className="p-3 bg-white/10 rounded-lg w-full">Hichat: Chat đa kênh</div>
                    <div className="p-3 bg-white/10 rounded-lg w-full font-bold text-brand-red bg-white">CDP: Thu thập & Phân tích</div>
                    <div className="p-3 bg-white/10 rounded-lg w-full">AI Engine: Gợi ý thông minh</div>
                    <div className="p-3 bg-white/10 rounded-lg w-full">Automation</div>
                </div>
            </div>
       </div>

       {/* Arrow Group */}
       <div className="flex flex-col justify-center gap-2 text-brand-red opacity-50">
           <ArrowRight size={32} />
           <ArrowRight size={32} />
           <ArrowRight size={32} />
       </div>

       {/* Column 3: Results */}
       <div className="flex flex-col gap-4 w-1/4">
          <h3 className="text-center font-bold text-green-600 uppercase text-sm mb-4">Kết Quả</h3>
          {[
              { label: "Tự động trả lời FAQ", color: "bg-green-50 text-green-700" },
              { label: "Tạo đơn từ Chat", color: "bg-green-50 text-green-700" },
              { label: "Customer 360 View", color: "bg-green-100 text-green-800 font-bold" },
              { label: "Personalized Marketing", color: "bg-green-50 text-green-700" },
              { label: "Báo cáo Real-time", color: "bg-green-50 text-green-700" },
          ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`flex items-center gap-2 p-4 rounded-lg border border-green-200 shadow-sm ${item.color}`}
              >
                  <CheckCircle size={16} />
                  <span className="text-sm">{item.label}</span>
              </motion.div>
          ))}
       </div>
    </div>
  )
}

// --- CHAT SIMULATION ---
export const ChatSimulation = () => {
    const [messages, setMessages] = useState<{sender: 'user'|'bot', text: string}[]>([]);
    
    useEffect(() => {
        const sequence = [
            { sender: 'user', text: "Cho em 2 ly G7 nóng giao đến 123 Lê Lợi", delay: 1000 },
            { sender: 'bot', text: "Dạ em xác nhận: 2 ly G7 nóng, giao đến 123 Lê Lợi. Anh cho em SĐT để xác nhận đơn ạ?", delay: 3000 },
            { sender: 'user', text: "0901234567", delay: 5000 },
            { sender: 'bot', text: "Anh Minh phải không ạ? Em đã tạo đơn rồi. Tổng 80k (đã giảm 10% cho khách VIP). Giao trong 30 phút nhé!", delay: 7500 },
        ];

        let timeouts: ReturnType<typeof setTimeout>[] = [];
        
        // Reset
        setMessages([]);

        sequence.forEach(({ sender, text, delay }) => {
            const t = setTimeout(() => {
                setMessages(prev => [...prev, { sender: sender as 'user'|'bot', text }]);
            }, delay);
            timeouts.push(t);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="w-full h-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-brand-red p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Bot size={18} />
                    </div>
                    <div>
                        <div className="font-bold text-sm">Trung Nguyen Legend Support</div>
                        <div className="text-xs opacity-80 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full"></span> Active now</div>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 bg-gray-50 p-4 space-y-4 overflow-y-auto">
                <AnimatePresence>
                    {messages.map((msg, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-white border border-gray-200 text-stone-800 rounded-bl-none shadow-sm'}`}>
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {messages.length === 4 && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-4">
                         <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-xs font-bold border border-green-200 flex items-center gap-2">
                            <CheckCircle size={14} /> Order #DH1928 Created Successfully
                         </div>
                     </motion.div>
                )}
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
                <div className="h-10 bg-gray-100 rounded-full w-full"></div>
            </div>
        </div>
    )
}

// --- CUSTOMER PROFILE CARD ---
export const CustomerProfileCard = () => {
    return (
        <motion.div 
            initial={{ rotateY: 90 }}
            whileInView={{ rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
        >
            <div className="h-20 bg-gradient-to-r from-orange-400 to-brand-red relative">
                <div className="absolute -bottom-10 left-6 w-20 h-20 bg-white rounded-full p-1 shadow-lg">
                    <div className="w-full h-full bg-stone-200 rounded-full flex items-center justify-center text-stone-400">
                        <User size={36} />
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase border border-white/30">
                    VIP Member
                </div>
            </div>
            
            <div className="pt-14 pb-6 px-6">
                <h3 className="text-xl font-bold text-stone-900 mb-1">Nguyễn Văn A</h3>
                <p className="text-stone-500 text-xs mb-5">Nam • 25-30 tuổi • TP.HCM</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                        <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Customer Score</div>
                        <div className="text-xl font-bold text-brand-red flex items-center gap-1">
                            85 <span className="text-[10px] font-normal text-stone-400">/ 100</span>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">Total Orders</div>
                        <div className="text-xl font-bold text-blue-600">
                            15 <span className="text-[10px] font-normal text-stone-400">đơn</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <Star className="text-yellow-500 mt-1 flex-shrink-0" size={14} />
                        <div>
                            <span className="font-bold text-stone-700 text-xs block">Sản phẩm yêu thích</span>
                            <span className="text-stone-500 text-xs">Cà phê G7, Trung Nguyên Legend</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Clock className="text-blue-500 mt-1 flex-shrink-0" size={14} />
                        <div>
                            <span className="font-bold text-stone-700 text-xs block">Tần suất ghé thăm</span>
                            <span className="text-stone-500 text-xs">3 lần/tuần (thường vào sáng)</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Share2 className="text-purple-500 mt-1 flex-shrink-0" size={14} />
                        <div>
                            <span className="font-bold text-stone-700 text-xs block">Kênh liên lạc ưu tiên</span>
                            <span className="text-stone-500 text-xs">Zalo &gt; Facebook</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-3 bg-stone-900 text-white rounded-lg text-xs">
                    <span className="text-brand-red font-bold uppercase text-[10px] block mb-1">Gợi ý Marketing:</span>
                    Ưu đãi combo sáng, giới thiệu sản phẩm mới premium.
                </div>
            </div>
        </motion.div>
    )
}

// --- MARKETING WORKFLOW ---
export const MarketingWorkflow = ({ title, trigger, steps, color, borderColor, iconColor }: any) => (
    <div className={`min-w-[280px] p-6 rounded-xl border-t-4 ${color} ${borderColor} shadow-sm flex flex-col`}>
        <h3 className="font-bold text-lg text-stone-800 mb-2">{title}</h3>
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">Trigger: {trigger}</div>
        
        <div className="space-y-4 flex-1">
            {steps.map((step: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border bg-white ${iconColor} ${borderColor}`}>
                        {i + 1}
                    </div>
                    <span className="text-sm text-stone-600 leading-tight">{step}</span>
                </div>
            ))}
        </div>
    </div>
)

// --- AGENT GRID ---
export const AgentGrid = () => {
    const agents = [
        { name: "Miko", role: "Team Lead", color: "bg-red-100" },
        { name: "Tina", role: "Facebook Specialist", color: "bg-blue-100" },
        { name: "Nara", role: "Blog Expert", color: "bg-orange-100" },
        { name: "Luna", role: "Instagram Artist", color: "bg-pink-100" },
        { name: "Alex", role: "Community Manager", color: "bg-green-100" },
        { name: "Zara", role: "LinkedIn Pro", color: "bg-indigo-100" },
        { name: "Ira", role: "Researcher", color: "bg-yellow-100" },
        { name: "Ivy", role: "Strategist", color: "bg-purple-100" },
    ];

    return (
        <div className="grid grid-cols-4 gap-4 p-8">
            {agents.map((agent, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-xl border border-transparent hover:border-brand-red/20 hover:shadow-lg transition-all cursor-pointer ${agent.color} flex flex-col items-center text-center`}
                >
                    <div className="w-16 h-16 bg-white rounded-full mb-4 shadow-sm flex items-center justify-center text-2xl">
                        🤖
                    </div>
                    <h3 className="font-bold text-stone-900">{agent.name}</h3>
                    <p className="text-xs uppercase tracking-wide text-stone-500 mt-1">{agent.role}</p>
                </motion.div>
            ))}
            <div className="col-span-4 mt-8 flex justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 flex items-center gap-2 text-sm font-medium text-stone-600">
                    <Search size={16} /> Research Trends
                    <ArrowRight size={16} className="mx-2 opacity-30" />
                    <Edit3 size={16} /> Generate Content
                    <ArrowRight size={16} className="mx-2 opacity-30" />
                    <Share2 size={16} /> Auto-Post
                    <ArrowRight size={16} className="mx-2 opacity-30" />
                    <BarChart3 size={16} /> Analytics
                </div>
            </div>
        </div>
    )
}

// --- VIETNAM MAP VISUAL ---
export const VietnamMapVisual = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center p-8 overflow-hidden bg-stone-50">
            {/* Background Map SVG */}
            <svg 
                viewBox="0 0 400 800" 
                className="h-[120%] w-auto opacity-100 drop-shadow-2xl"
                style={{ filter: "drop-shadow(0px 10px 20px rgba(166, 25, 46, 0.2))" }}
            >
                {/* Mainland Vietnam - Stylized Simplified Path */}
                <path 
                    d="M120,50 C130,50 145,55 150,60 C160,70 155,80 145,85 C140,90 145,100 150,110 C155,120 160,130 165,145 C167,155 170,165 175,170 C180,175 175,185 170,195 C165,205 160,215 155,225 C150,235 145,245 150,255 C155,265 160,270 155,275 C145,280 135,275 125,265 C120,260 120,250 125,245 C130,240 125,235 120,230 C115,225 120,205 125,195 C130,185 135,175 135,165 C130,155 125,145 125,135 C125,125 120,115 120,105 C120,95 125,85 120,75 C115,65 120,55 130,50 Z"
                    fill="#A6192E"
                    stroke="white"
                    strokeWidth="2"
                />
                
                {/* Hoang Sa (Paracel Islands) - Cluster of dots */}
                <g transform="translate(220, 160)">
                    <text x="0" y="-15" className="text-[10px] font-bold fill-stone-500 uppercase tracking-wider text-center" textAnchor="middle">Hoàng Sa</text>
                    <circle cx="0" cy="0" r="3" fill="#A6192E" opacity="0.8" />
                    <circle cx="6" cy="3" r="2" fill="#A6192E" opacity="0.6" />
                    <circle cx="-5" cy="5" r="2" fill="#A6192E" opacity="0.6" />
                    <circle cx="2" cy="8" r="1.5" fill="#A6192E" opacity="0.5" />
                </g>

                {/* Truong Sa (Spratly Islands) - Cluster of dots */}
                <g transform="translate(240, 320)">
                    <text x="0" y="-15" className="text-[10px] font-bold fill-stone-500 uppercase tracking-wider text-center" textAnchor="middle">Trường Sa</text>
                    <circle cx="0" cy="0" r="3" fill="#A6192E" opacity="0.8" />
                    <circle cx="8" cy="-2" r="2" fill="#A6192E" opacity="0.6" />
                    <circle cx="-6" cy="6" r="2" fill="#A6192E" opacity="0.6" />
                    <circle cx="5" cy="10" r="2" fill="#A6192E" opacity="0.5" />
                    <circle cx="-2" cy="12" r="1.5" fill="#A6192E" opacity="0.5" />
                </g>

                {/* Animated Markers */}
                {/* Hanoi */}
                <g transform="translate(135, 90)">
                    <circle cx="0" cy="0" r="3" fill="white" />
                    <circle cx="0" cy="0" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.5">
                        <animate attributeName="r" from="3" to="12" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Da Nang */}
                <g transform="translate(160, 175)">
                    <circle cx="0" cy="0" r="4" fill="white" stroke="#A6192E" strokeWidth="1" />
                    <text x="12" y="4" className="text-[10px] font-bold fill-white uppercase tracking-wider shadow-sm" style={{textShadow: "0px 1px 2px rgba(0,0,0,0.5)"}}>Đà Nẵng</text>
                    <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="1" fill="none" opacity="0.6">
                         <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" />
                         <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                </g>

                {/* Ho Chi Minh */}
                <g transform="translate(140, 260)">
                    <circle cx="0" cy="0" r="4" fill="white" stroke="#A6192E" strokeWidth="1" />
                    <text x="12" y="4" className="text-[10px] font-bold fill-white uppercase tracking-wider shadow-sm" style={{textShadow: "0px 1px 2px rgba(0,0,0,0.5)"}}>TP.HCM</text>
                    <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="1" fill="none" opacity="0.6">
                         <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" />
                         <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                </g>

            </svg>
            
            {/* Overlay Gradient for nicer integration */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-stone-100/20 pointer-events-none"></div>
        </div>
    );
}
