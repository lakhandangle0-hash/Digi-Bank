import React, { useState } from 'react';

export default function DigiBankAdmin() {
  const [buyRate, setBuyRate] = useState(100);
  const [sellRate, setSellRate] = useState(95);

  return (
    <div className="p-6 bg-slate-950 text-white min-h-screen">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">DIGI BANK | Admin Portal</h1>
      <div className="bg-slate-900 p-4 rounded-lg max-w-md">
        <h2 className="text-lg mb-2">Live Exchange Rates</h2>
        <label className="block text-sm text-slate-400">Buy Rate (INR)</label>
        <input type="number" value={buyRate} onChange={e => setBuyRate(e.target.value)} className="w-full p-2 bg-slate-800 rounded mb-3 text-white" />
        <label className="block text-sm text-slate-400">Sell Rate (INR)</label>
        <input type="number" value={sellRate} onChange={e => setSellRate(e.target.value)} className="w-full p-2 bg-slate-800 rounded mb-4 text-white" />
        <button onClick={() => alert("Rates Updated!")} className="w-full bg-blue-600 py-2 rounded font-bold">Update Rates</button>
      </div>
    </div>
  );
}