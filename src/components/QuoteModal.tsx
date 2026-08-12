import React, { useState } from 'react';
import { X, CheckCircle, Package, Send, Shield, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'United States',
    product: 'terra-block-5kg',
    quantity: '40ft-hc',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSubmitted(true);
  };

  const handleResetModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={handleResetModal} />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-space-900 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl z-10 spotlight-card">
        
        {/* Close Button */}
        <button
          onClick={handleResetModal}
          className="absolute top-6 right-6 p-2 rounded-lg bg-space-850 border border-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-1">
                <Package className="w-4 h-4" />
                <span>Direct Container &amp; Sample Ordering</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Request TERRACOCO® Bulk Quote
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                FOB &amp; CIF Shipping worldwide. Samples dispatched within 48 hours via DHL Express.
              </p>
            </div>

            {/* Fields */}
            <div className="space-y-4 font-mono text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-gray-600 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="elena@agrifarm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-gray-600 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Greenhouse / Farm Name</label>
                  <input
                    type="text"
                    placeholder="AeroGrow Hydroponics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-gray-600 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Destination Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="United States">United States (US)</option>
                    <option value="Netherlands">Netherlands (Rotterdam Port)</option>
                    <option value="Canada">Canada</option>
                    <option value="Spain">Spain</option>
                    <option value="Australia">Australia</option>
                    <option value="UAE">United Arab Emirates (Dubai)</option>
                    <option value="Other">Other Global Port</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Product Specification</label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="terra-block-5kg">TERRA-BLOCK 5kg (&lt;0.5 EC)</option>
                    <option value="hydro-bag-open">HYDRO-BAG Grow Bags</option>
                    <option value="coco-disc-pellets">COCO-DISC Starter Pellets</option>
                    <option value="nutrilock-bio">NUTRILOCK Biochar Substrate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-1.5 uppercase">Requested Volume</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="sample-box">Sample Box (DHL Express 5kg)</option>
                    <option value="20ft-fcl">20' FCL Container (~2,200 Blocks)</option>
                    <option value="40ft-hc">40' HC Container (~4,400 Blocks / 330k L)</option>
                    <option value="multi-container">Multi-Container Contract</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Freight RFQ</span>
            </button>

          </form>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Commercial RFQ Received!</h3>
              <p className="text-xs font-mono text-gray-400 max-w-sm mx-auto mt-2">
                Thank you <strong className="text-white">{formData.name}</strong>. Reference Quote ID <strong className="text-emerald-400">#TR-2026-FCL</strong> has been generated. Our export logistics team will send CIF pricing to <strong className="text-white">{formData.email}</strong> within 4 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-space-950 border border-white/5 font-mono text-xs text-left space-y-1 text-gray-400">
              <div>Destination Port: <span className="text-white">{formData.country}</span></div>
              <div>Volume Selected: <span className="text-emerald-400">{formData.quantity.toUpperCase()}</span></div>
              <div>Estimated Delivery: <span className="text-coir-gold">14 – 18 Days Shipping</span></div>
            </div>

            <button
              onClick={handleResetModal}
              className="px-8 py-3 rounded-xl bg-space-850 border border-white/10 text-gray-300 font-mono text-xs font-bold uppercase hover:text-white"
            >
              Return to Substrates
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
