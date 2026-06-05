import React from 'react';

export function Footer() {
  const footerLinks = {
    Collections: ['Serving Bowls', 'Dining Sets', 'Decorative', 'Limited Edition'],
    Company: ['About Us', 'Our Process', 'Journal', 'Careers'],
    Support: ['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us'],
  };

  return (
    <footer className="bg-beige-50 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-earth-900/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 md:mb-16">
          
          <div className="lg:col-span-2">
            <a href="/" className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 md:mb-6 block">
              Clay <span className="text-terracotta-600">&</span> Co.
            </a>
            <p className="text-earth-900/60 max-w-sm text-balance text-sm md:text-base">
              We design and craft beautiful, sustainable clay pieces intended to become heirlooms in your home.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-medium text-base md:text-lg mb-4 md:mb-6">{title}</h4>
              <ul className="flex flex-col gap-3 md:gap-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-earth-900/60 hover:text-terracotta-600 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pt-8 border-t border-earth-900/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs md:text-sm text-earth-900/50">
            © {new Date().getFullYear()} Made by sylektus!
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-earth-900/50">
            <a href="#" className="hover:text-earth-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-earth-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
