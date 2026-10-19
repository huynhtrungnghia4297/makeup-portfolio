"use client"; // Bắt buộc khi dùng Framer Motion trong Next.js App Router

import { motion } from "framer-motion";
//import { Instagram, Facebook, Mail } from "lucide-react";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-gray-800 flex flex-col items-center justify-center p-6">
      
      {/* Header / Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-[#D4AF37] font-semibold tracking-widest uppercase mb-4">
          Professional Makeup Artist
        </p>
        <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900">
          Tôn vinh vẻ đẹp <br className="hidden md:block"/> nguyên bản của bạn
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Chuyên cung cấp dịch vụ trang điểm cô dâu, dự tiệc và chụp ảnh thời trang. 
          Phong cách hiện đại, tinh tế và sang trọng.
        </p>
      </motion.div>

      {/* Nút Call to action */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex gap-4"
      >
        <button className="px-8 py-3 bg-[#D4AF37] text-white rounded-full hover:bg-black transition-colors duration-300">
          Đặt lịch ngay
        </button>
        <button className="px-8 py-3 border border-gray-300 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300">
          Xem Portfolio
        </button>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 flex gap-6 text-gray-400"
      >
        <a href="#" className="hover:text-[#D4AF37] transition-colors"><FiInstagram size={24} /></a>
        <a href="#" className="hover:text-[#D4AF37] transition-colors"><FiFacebook size={24} /></a>
        <a href="#" className="hover:text-[#D4AF37] transition-colors"><FiMail size={24} /></a>
      </motion.div>

    </main>
  );
}