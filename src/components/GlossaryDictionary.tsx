import React, { useState } from 'react';
import { GLOSSARY, GlossaryTerm } from '../data/textbookData';
import { Search, Bookmark, Filter, BookOpen } from 'lucide-react';

export const GlossaryDictionary: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', 'Địa lí', 'Lịch sử', 'Văn hoá', 'Tự nhiên'];

  const filteredGlossary = GLOSSARY.filter((item) => {
    const matchesCategory = selectedCategory === 'Tất cả' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Filter */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span>Giải Thích Khái Niệm, Thuật Ngữ SGK</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Tra cứu nhanh từ vựng, thuật ngữ địa lí, lịch sử và văn hoá trang 122 - 123 SGK Lớp 4
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Tra cứu từ khóa, khái niệm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Glossary Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGlossary.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                  {item.category}
                </span>
                <span className="text-[11px] text-slate-400">Trang {item.page}</span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {item.term}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                {item.definition}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
