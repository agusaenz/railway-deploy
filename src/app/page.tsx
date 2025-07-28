"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';


interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'El más avanzado. Titanio. A17 Pro. Cámara de 48MP.',
      price: '$1,199',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096'
    },
    {
      id: 2,
      name: 'iPhone 15',
      description: 'Dynamic Island. Cámara de 48MP. USB-C.',
      price: '$799',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692926963881'
    },
    {
      id: 3,
      name: 'iPhone 14',
      description: 'Gran duración de batería. Modo Acción.',
      price: '$699',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027205804'
    }
  ];

useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Fondo futurista */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30"></div>
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
      </div>

      {/* Efectos de partículas */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-md py-2 border-b border-purple-900/30' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Logo La Manzanita"
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
              La Manzanita
            </h1>
          </div>
          
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {['INICIO', 'PRODUCTOS', 'OFERTAS', 'CONTACTO'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="relative group text-white/80 hover:text-purple-300 transition-colors font-medium tracking-wider text-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white/80 hover:text-purple-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white/80 hover:text-purple-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-950/95 z-40 flex flex-col items-center justify-center space-y-8 pt-20">
            {['INICIO', 'PRODUCTOS', 'OFERTAS', 'CONTACTO'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-2xl font-medium text-white/80 hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                priority={index === 0}
                style={{
                  transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) scale(1.05)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/20" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200">
                {featuredProducts[currentImageIndex].name}
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeInUp delay-100 text-white/80 font-light tracking-wide">
              {featuredProducts[currentImageIndex].description}
            </p>
            <div className="animate-fadeInUp delay-200">
              <p className="text-3xl md:text-4xl font-bold mb-8 text-purple-300">
                {featuredProducts[currentImageIndex].price}
              </p>
              <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
                <span className="relative z-10">COMPRAR AHORA</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-12 h-1 rounded-full transition-all ${index === currentImageIndex ? 'bg-gradient-to-r from-purple-400 to-indigo-400' : 'bg-white/20'}`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Efecto de esquinas */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-purple-400/50 opacity-80"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-400/50 opacity-80"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-purple-400/50 opacity-80"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-400/50 opacity-80"></div>
      </section>

      {/* Featured Products */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200">
                NUESTROS PRODUCTOS
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative overflow-hidden rounded-lg hover:translate-y-2 transition-transform duration-500 border border-gray-800 hover:border-purple-500/30 bg-gradient-to-b from-gray-900/50 to-gray-950/50 backdrop-blur-sm"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-400 mb-4 font-light">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-300">{product.price}</span>
                    <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600/80 to-indigo-600/80 hover:from-purple-600 hover:to-indigo-600 text-white px-5 py-2 rounded-lg text-sm transition-all duration-300">
                      <span className="relative z-10">AÑADIR AL CARRITO</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-gray-950/50 via-gray-950 to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-200">
                EXPERIENCIA PREMIUM
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "PRODUCTOS ORIGINALES",
                description: "Garantía Apple y sellados de fábrica en todos nuestros productos."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "ENVÍO RÁPIDO",
                description: "Recibí tu pedido en 24-48 horas con envío express gratuito."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "PAGO SEGURO",
                description: "Múltiples métodos de pago con la máxima seguridad."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-lg hover:bg-gray-900/50 transition-all duration-500 border border-gray-800 hover:border-purple-500/30 bg-gradient-to-b from-gray-900/30 to-gray-950/30 backdrop-blur-sm group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-lg flex items-center justify-center mx-auto mb-6 text-purple-300 group-hover:bg-purple-600/20 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wider text-purple-200">{feature.title}</h3>
                <p className="text-gray-400 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-950 py-16 border-t border-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="Logo La Manzanita"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                  LA MANZANITA
                </h3>
              </div>
              <p className="text-gray-500 font-light">
                Tu tienda confiable de productos Apple e insumos tecnológicos.
              </p>
              <div className="mt-6 flex space-x-4">
                {['twitter', 'facebook', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-500 hover:text-purple-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "PRODUCTOS",
                items: ['iPhone', 'iPad', 'Mac', 'Apple Watch', 'AirPods']
              },
              {
                title: "ENLACES",
                items: ['Inicio', 'Sobre nosotros', 'Contacto', 'Blog', 'FAQ']
              },
              {
                title: "CONTACTO",
                items: ['Avenida Ramirez 123, Paraná', 'info@lamanzanita.com', '+343 62 345 678', 'Horario: 10:00 - 20:00']
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-lg font-bold mb-6 tracking-wider text-purple-200">{column.title}</h4>
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-500 hover:text-purple-300 transition-colors font-light">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-900/50 mt-12 pt-8 text-center text-gray-500 font-light">
            <p>&copy; {new Date().getFullYear()} LA MANZANITA. TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}