
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DataFlowDiagram, 
  ChatSimulation, 
  CustomerProfileCard, 
  AgentGrid,
  MarketingWorkflow,
  VietnamMapVisual
} from './Visuals';
import { Database, Users, BrainCircuit, Globe, MessageCircle, Zap, Lock, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { HilabLogo } from '../App';

// --- SLIDE 1: COVER ---
export const CoverSlide = () => (
  <div className="w-full h-full relative flex items-center justify-center bg-stone-900 overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/90 via-stone-900/90 to-stone-900/95"></div>
    
    <div className="relative z-10 container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <div className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm border border-white/20">
                Presented by Hilab Technology
            </div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-7xl md:text-8xl font-serif text-white leading-tight mb-2"
            >
                AI <br/>
                SOLUTIONS
            </motion.h1>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400 mb-12 uppercase tracking-tight"
            >
                PROPOSAL
            </motion.h2>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border-l-4 border-white pl-6"
            >
                <p className="text-stone-400 text-sm tracking-widest uppercase mb-1">Client</p>
                <p className="text-3xl text-white font-serif italic">Trung Nguyen Legend</p>
            </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:flex justify-end">
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 border border-white/10 rounded-full flex items-center justify-center"
             >
                <div className="w-64 h-64 border border-white/20 rounded-full"></div>
             </motion.div>
        </div>
    </div>
  </div>
);

// --- SLIDE 2: ECOSYSTEM INTRO ---
export const EcosystemIntroSlide = () => (
    <div className="w-full h-full flex items-center bg-gray-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-2/3 h-full bg-stone-100 skew-x-[-10deg] translate-x-32 transform origin-top"></div>
        <div className="container mx-auto px-12 relative z-10">
            <div className="max-w-4xl">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-8xl font-serif text-brand-red/10 absolute -top-32 -left-10 select-none"
                >
                    01
                </motion.div>
                <h2 className="text-5xl font-bold text-brand-red mb-8 leading-tight">
                    Hệ sinh thái AI Marketing toàn diện <br/> cho thương hiệu
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mb-12">
                    Trong kỷ nguyên truyền thông tốc độ cao và sự phát triển vượt bậc của AI, doanh nghiệp cần một hệ sinh thái kết nối:
                </p>
                
                <div className="flex gap-8">
                    {[
                        { title: "Dữ liệu", icon: Database },
                        { title: "Con người", icon: Users },
                        { title: "Công nghệ", icon: BrainCircuit },
                        { title: "Văn hóa", icon: Globe }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-lg border-b-4 border-brand-red w-40"
                        >
                            <item.icon size={32} className="text-brand-red" />
                            <span className="font-bold text-stone-800">{item.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// --- SLIDE 3: SOLUTION OVERVIEW ---
export const SolutionOverviewSlide = () => (
    <div className="w-full h-full flex flex-col justify-center bg-white">
        <div className="container mx-auto px-12">
            <div className="mb-16">
                 <h3 className="text-brand-red font-bold uppercase tracking-widest mb-2">Commercial Proposal</h3>
                 <h2 className="text-4xl font-serif text-stone-900">Tổng quan giải pháp đề xuất</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="group p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-brand-red/30 transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <Globe size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">HiAGI</h3>
                    <h4 className="text-lg text-brand-red font-medium mb-4">Nền tảng Vận hành truyền thông</h4>
                    <p className="text-stone-600 leading-relaxed">
                        AI vận hành nội dung Social tự động, từ lên ý tưởng, viết bài, đăng đa nền tảng đến đo lường hiệu quả.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-brand-red/30 transition-all duration-300"
                >
                    <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">HilabDP</h3>
                    <h4 className="text-lg text-brand-red font-medium mb-4">Tự động hóa Chăm sóc khách hàng 360 độ</h4>
                    <p className="text-stone-600 leading-relaxed">
                        Nền tảng chăm sóc khách hàng tự động, kết nối đa kênh, nắm bắt toàn bộ điểm chạm & nuôi dưỡng khách hàng bằng dữ liệu thật.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
);

// --- SLIDE 4: DATA FLOW ---
export const DataFlowSlide = () => (
    <div className="w-full h-full flex flex-col pt-20 bg-gray-50">
        <div className="container mx-auto px-12 mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-2 max-w-3xl">Giải pháp Tự động hóa quy trình bán hàng, thu thập dữ liệu & hỗ trợ nhân viên</h2>
        </div>
        <div className="flex-1 w-full bg-white border-t border-gray-200 p-8 overflow-hidden flex items-center justify-center">
            <DataFlowDiagram />
        </div>
    </div>
);

// --- SLIDE 5: CDP (Fixed Layout) ---
export const CDPSlide = () => (
    <div className="w-full h-full flex flex-col pt-24 pb-12 bg-white overflow-hidden">
        <div className="container mx-auto px-12 h-full flex flex-col">
            <div className="mb-8">
                <h2 className="text-4xl font-serif text-brand-red mb-2">HilabDP - Customer Data Platform 360 độ</h2>
                <p className="text-xl text-stone-500">Thu thập dữ liệu đa điểm chạm với khách hàng</p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Side: Table - Spans 7 cols */}
                <div className="lg:col-span-7 bg-stone-50 p-8 rounded-xl h-full shadow-sm flex flex-col justify-center">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr className="text-xs uppercase tracking-wider text-stone-400 border-b border-stone-200">
                                    <th className="pb-4 w-1/4">Nguồn dữ liệu</th>
                                    <th className="pb-4 w-1/2">Data thu thập</th>
                                    <th className="pb-4 w-1/4">Ứng dụng</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { src: "POS Events", data: "Lịch sử mua, SP yêu thích", app: "Upsell/Cross-sell" },
                                    { src: "Camera AI", data: "Giới tính, độ tuổi, time", app: "Demographic Analysis" },
                                    { src: "WiFi Marketing", data: "Device ID, tần suất", app: "Loyalty Tracking" },
                                    { src: "Hichat", data: "Nội dung chat, sentiment", app: "CS Improvement" },
                                    { src: "Website", data: "Browsing behavior", app: "Retargeting" },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-stone-200 last:border-0 hover:bg-white transition-colors group">
                                        <td className="py-5 font-bold text-stone-800 whitespace-nowrap pr-4">{row.src}</td>
                                        <td className="py-5 text-stone-600 pr-4">{row.data}</td>
                                        <td className="py-5 text-brand-red font-medium whitespace-nowrap">{row.app}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Side: Visual - Spans 5 cols */}
                <div className="lg:col-span-5 flex items-center justify-center h-full">
                     <CustomerProfileCard />
                </div>
            </div>
        </div>
    </div>
);

// --- SLIDE 6: HICHAT ---
export const HichatSlide = () => (
    <div className="w-full h-full flex flex-col justify-center bg-gray-50">
        <div className="container mx-auto px-12">
            <h2 className="text-4xl font-serif text-brand-red mb-8">Hichat - Chat đa kênh & Tự động tạo đơn</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-12">
                {[
                    { title: "Chat đa kênh", desc: "Facebook, Zalo OA, Website Widget, Instagram Direct.", icon: MessageCircle },
                    { title: "AI-Powered Bot", desc: "Tự động trả lời 60% FAQ. Phân loại intent khách hàng.", icon: BrainCircuit },
                    { title: "Tạo đơn tự động", desc: "Thu thập thông tin từ chat. Tạo đơn hàng ngay. Xuất PDF.", icon: Zap },
                ].map((card, i) => (
                    <motion.div 
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <card.icon className="text-brand-red mb-4" size={32} />
                        <h3 className="text-xl font-bold text-stone-900 mb-2">{card.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="h-96 w-full">
                <ChatSimulation />
            </div>
        </div>
    </div>
);

// --- SLIDE 7: RAG ---
export const RAGSlide = () => (
    <div className="w-full h-full flex items-center bg-stone-900 text-white">
        <div className="container mx-auto px-12 grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5">
                <div className="inline-block px-3 py-1 bg-stone-700 rounded text-xs font-bold mb-4">INTERNAL TOOLS</div>
                <h2 className="text-5xl font-serif text-white mb-6">RAG Chatbot</h2>
                <h3 className="text-2xl text-stone-400 mb-6">Trợ lý nội bộ thông minh</h3>
                
                <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                    Retrieval-Augmented Generation (RAG) giúp nhân viên tra cứu thông tin khách hàng (từ CDP) và tài liệu nội bộ (SOP, Policy) nhanh chóng thông qua hội thoại tự nhiên.
                </p>

                <ul className="space-y-4">
                    {[
                        "Tích hợp CDP: Truy vấn lịch sử mua hàng Real-time",
                        "Quản lý tài liệu: Upload & Search chính sách công ty",
                        "Bảo mật: Phân quyền theo phòng ban (Sales/Marketing)"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                            <span className="text-stone-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="col-span-7 bg-stone-800 p-8 rounded-xl border border-stone-700 shadow-2xl">
                <div className="flex items-center gap-2 mb-6 border-b border-stone-700 pb-4">
                    <Lock size={16} className="text-green-500"/>
                    <span className="text-sm font-mono text-stone-400">Authenticated: Sales Agent 01</span>
                </div>
                <div className="space-y-6 font-mono text-sm">
                    <div className="bg-stone-700/50 p-4 rounded-lg rounded-tl-none ml-8 border border-stone-600">
                        <p className="text-stone-400 mb-1 text-xs uppercase">User Query</p>
                        <p className="text-white">"Khách hàng Nguyễn Văn A đã mua bao nhiêu đơn trong tháng này?"</p>
                    </div>
                    <div className="flex justify-center py-2">
                        <span className="text-xs text-brand-red animate-pulse flex items-center gap-2">
                             <Zap size={12} /> Running RAG Pipeline (CDP API Call)...
                        </span>
                    </div>
                    <div className="bg-brand-red/10 p-4 rounded-lg rounded-tr-none mr-8 border border-brand-red/20">
                        <p className="text-brand-red mb-1 text-xs uppercase">AI Assistant</p>
                        <p className="text-white mb-2">"Khách A đã mua <span className="text-brand-red font-bold">15 đơn</span>, trị giá <span className="text-brand-red font-bold">3.5 triệu</span>."</p>
                        <p className="text-stone-400 text-xs italic flex items-center gap-1"><Database size={10} /> Source: CDP Real-time DB • 0.4s latency</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- SLIDE 8: AUTOMATION ---
export const AutomationSlide = () => (
    <div className="w-full h-full flex flex-col justify-center bg-gray-50">
        <div className="container mx-auto px-12">
            <h2 className="text-4xl font-serif text-brand-red mb-12">Marketing Automation Workflows</h2>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                 <MarketingWorkflow 
                    title="Welcome Series" 
                    trigger="Khách đăng ký mới"
                    steps={["Chào mừng + Giới thiệu", "Gửi ưu đãi lần đầu (10%)", "Nhắc nhở sử dụng"]}
                    color="bg-blue-50"
                    borderColor="border-blue-200"
                    iconColor="text-blue-600"
                 />
                 <MarketingWorkflow 
                    title="Cart Abandonment" 
                    trigger="Bỏ giỏ hàng 30p"
                    steps={["Nhắn tin nhắc qua Zalo", "Offer freeship nếu checkout", "Hỏi thăm lý do"]}
                    color="bg-amber-50"
                    borderColor="border-amber-200"
                    iconColor="text-amber-600"
                 />
                 <MarketingWorkflow 
                    title="Birthday Campaign" 
                    trigger="3 ngày trước sinh nhật"
                    steps={["Gửi lời chúc + Voucher đặc biệt", "Tặng 1 ly cà phê free", "Upsell bánh ngọt"]}
                    color="bg-rose-50"
                    borderColor="border-rose-200"
                    iconColor="text-rose-600"
                 />
                 <MarketingWorkflow 
                    title="Win-back Inactive" 
                    trigger="Không mua hàng 30 ngày"
                    steps={["'Chúng tôi nhớ bạn!' message", "Ưu đãi Comeback đặc biệt", "Giới thiệu món mới"]}
                    color="bg-purple-50"
                    borderColor="border-purple-200"
                    iconColor="text-purple-600"
                 />
            </div>
        </div>
    </div>
);

// --- SLIDE 9: SCENARIO DEMO ---
export const ScenarioSlide = () => (
    <div className="w-full h-full flex flex-col justify-center bg-white">
        <div className="container mx-auto px-12 grid grid-cols-2 gap-16">
            <div>
                <h2 className="text-4xl font-serif text-stone-900 mb-6">Kịch bản Demo</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Khách đặt hàng qua Facebook</h3>
                            <p className="text-stone-500 text-sm">Khách nhắn tin -{'>'} Bot nhận diện -{'>'} Xin thông tin -{'>'} Tạo đơn -{'>'} Gửi bill PDF.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Nhân viên tra cứu (RAG)</h3>
                            <p className="text-stone-500 text-sm">Nhân viên hỏi "Doanh số món G7 tháng này?" -{'>'} Bot query Database -{'>'} Trả lời ngay.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Tra cứu tài liệu nội bộ</h3>
                            <p className="text-stone-500 text-sm">CS hỏi quy trình xử lý khiếu nại -{'>'} Bot tìm trong file PDF quy định công ty.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                 <div className="text-center">
                    <Database size={48} className="text-stone-400 mx-auto mb-4" />
                    <h3 className="font-bold text-stone-700">Demo Data Ready</h3>
                    <p className="text-sm text-stone-500 mt-2 max-w-xs mx-auto">Chúng tôi đã chuẩn bị sẵn 50-100 hồ sơ khách hàng, lịch sử đơn hàng và tài liệu nội bộ giả lập cho buổi Demo.</p>
                 </div>
            </div>
        </div>
    </div>
);

// --- SLIDE 10: HiAGI DEEP DIVE ---
export const HiAGISlide = () => (
    <div className="w-full h-full flex flex-col pt-24 bg-stone-50">
        <div className="container mx-auto px-12 mb-8 text-center">
             <h2 className="text-4xl font-serif text-brand-red mb-4">HiAGI - AI Marketing Agent</h2>
             <p className="text-stone-600 max-w-2xl mx-auto">13 "AI Marketers" chuyên biệt phối hợp để tạo ra nội dung linh hoạt, đúng ngữ cảnh và văn hóa thương hiệu.</p>
        </div>
        <div className="flex-1 w-full overflow-hidden">
             <AgentGrid />
        </div>
    </div>
);

// --- SLIDE 11: CONTACT (Redesigned) ---
export const ContactSlide = () => (
    <div className="w-full h-full flex bg-stone-100 relative">
         {/* Left Side: White with Content */}
         <div className="w-1/2 h-full bg-white flex flex-col justify-center px-16 relative z-10 shadow-2xl">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                 <HilabLogo className="h-16 w-auto mb-10" color="#A6192E" />
                 
                 <div className="w-20 h-1 bg-brand-red mb-8"></div>

                 <h3 className="text-4xl font-serif text-stone-900 mb-12 tracking-tight">
                    THÔNG TIN LIÊN HỆ
                 </h3>
                 
                 <div className="space-y-10">
                     <div className="flex items-start gap-6 group">
                         <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm border border-stone-100">
                            <MapPin size={28} />
                         </div>
                         <div>
                             <p className="font-bold text-stone-900 text-xl mb-1">Địa chỉ</p>
                             <p className="text-stone-500 text-lg">Tầng 8, 122 Lý Thái Tông, Đà Nẵng</p>
                             <p className="text-stone-500 text-lg">TP. Hồ Chí Minh</p>
                         </div>
                     </div>
                     
                     <div className="flex items-start gap-6 group">
                         <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm border border-stone-100">
                            <Phone size={28} />
                         </div>
                         <div>
                             <p className="font-bold text-stone-900 text-xl mb-1">Liên hệ</p>
                             <p className="text-stone-500 text-lg">0932 586 532</p>
                             <p className="text-stone-500 text-lg">info@hilab.asia</p>
                         </div>
                     </div>

                      <div className="flex items-start gap-6 group">
                         <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm border border-stone-100">
                            <Globe size={28} />
                         </div>
                         <div>
                             <p className="font-bold text-stone-900 text-xl mb-1">Website</p>
                             <a href="https://hilab.asia" target="_blank" className="text-stone-500 hover:text-brand-red transition-colors flex items-center gap-1 text-lg">
                                https://hilab.asia/ <ExternalLink size={16} />
                             </a>
                         </div>
                     </div>
                 </div>
             </motion.div>
         </div>

         {/* Right Side: Map & Brand Visual */}
         <div className="w-1/2 h-full relative overflow-hidden bg-stone-50 border-l border-stone-200">
             <VietnamMapVisual />
         </div>
    </div>
);
