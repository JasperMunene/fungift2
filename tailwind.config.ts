import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        transparent: 'transparent',
        'green': '#96CEB4',              // Mint green (playful)
        'black': '#2C3E50',              // Softer dark blue-gray
        'secondary': '#7B68EE',          // Medium slate blue (playful)
        'secondary2': '#9370DB',         // Medium purple (playful)
        'white': '#ffffff',
        'surface': '#FFF9E6',            // Cream background (playful)
        'red': '#FF6B6B',                // Coral red (playful)
        'purple': '#DDA0DD',             // Light purple (playful)
        'success': '#32CD32',            // Bright lime green (playful)
        'yellow': '#FFE066',             // Sunshine yellow (playful)
        'pink': '#FF69B4',               // Bubblegum pink (playful)
        'line': '#E6F3FF',               // Very light blue (playful)
        'outline': 'rgba(75, 0, 130, 0.2)',  // Purple outline (playful)
        'surface2': 'rgba(255, 233, 167, 0.3)',  // Warm transparent overlay (playful)
        'surface1': 'rgba(255, 224, 102, 0.2)',  // Sunshine transparent overlay (playful)
        
        // Additional playful colors for components
        'bubble-pink': '#FF6B9D',
        'ocean-blue': '#4ECDC4', 
        'sunshine-yellow': '#FFD93D',
        'mint-fresh': '#2ECC71',
        'sunset-orange': '#FF8C42',
        'sky-blue': '#87CEEB',
        'peach': '#FFAB91',
        
        // Surface variations for backgrounds
        'surface-pink': 'rgba(255, 107, 157, 0.1)',
        'surface-blue': 'rgba(78, 205, 196, 0.1)',
        'surface-yellow': 'rgba(255, 215, 61, 0.1)',
      },
      container: {
        padding: {
          DEFAULT: '16px',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;