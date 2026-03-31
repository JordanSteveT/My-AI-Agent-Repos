'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function BlogContent() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      ...t.blog.posts[0],
      date: "12 Mars 2024",
      imageGradient: "from-blue-500/20 to-cyan-500/20",
      featured: true
    },
    {
      id: 2,
      ...t.blog.posts[1],
      date: "5 Mars 2024",
      imageGradient: "from-purple-500/20 to-pink-500/20",
      featured: false
    },
    {
      id: 3,
      ...t.blog.posts[2],
      date: "28 Février 2024",
      imageGradient: "from-emerald-500/20 to-teal-500/20",
      featured: false
    },
    {
      id: 4,
      ...t.blog.posts[3],
      date: "15 Février 2024",
      imageGradient: "from-orange-500/20 to-red-500/20",
      featured: false
    },
    {
      id: 5,
      ...t.blog.posts[4],
      date: "2 Février 2024",
      imageGradient: "from-indigo-500/20 to-blue-500/20",
      featured: false
    },
    {
      id: 6,
      ...t.blog.posts[5],
      date: "20 Janvier 2024",
      imageGradient: "from-rose-500/20 to-orange-500/20",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-32 pb-10 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-neon-purple mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
          {t.blog.subtitle}
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
        >
          {t.blog.title1}<span className="text-gradient">{t.blog.titleHighlight}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {t.blog.desc}
        </motion.p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className={`h-64 lg:h-auto bg-gradient-to-br ${featuredPost.imageGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-semibold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-neon-blue transition-colors font-display">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-white font-medium group-hover:text-neon-blue transition-colors mt-auto">
                  {t.blog.readArticle} <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 group cursor-pointer flex flex-col h-full"
            >
              <div className={`h-48 bg-gradient-to-br ${post.imageGradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors font-display">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-white font-medium group-hover:text-neon-purple transition-colors mt-auto">
                  {t.blog.readMore} <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
