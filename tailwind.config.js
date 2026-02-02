/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // 使用 Violet 作为主色，更具梦幻感
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Violet-500
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Secondary 使用 Indigo 辅助
        secondary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo-500
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Kawaii 马卡龙色系 - 饱和度较低，明度较高
        kawaii: {
          pink: '#ffb7c5',    // 樱花粉
          blue: '#a0c4ff',    // 婴儿蓝
          yellow: '#fdffb6',  // 奶油黄
          green: '#caffbf',   // 薄荷绿
          purple: '#bdb2ff',  // 香芋紫
          orange: '#ffd6a5',  // 杏子橙
          text: '#4a4a4a',    // 柔和的深灰文本
        },
        gray: {
          750: '#2d3748',
          850: '#1a202c',
        }
      },
      fontFamily: {
        // 英文标题用 Quicksand (圆体)，正文用 Nunito，中文用 Noto Sans SC
        sans: ['Quicksand', 'Nunito', 'Noto Sans SC', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 5s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 