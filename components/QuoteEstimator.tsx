import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const QuoteEstimator: React.FC = () => {
    const [sqft, setSqft] = useState<number>(2000);
    const [roofType, setRoofType] = useState('asphalt');

    const calculateEstimate = () => {
        let basePrice = 4.5; // per sqft
        if (roofType === 'metal') basePrice = 8.5;
        if (roofType === 'tile') basePrice = 12.0;

        return (sqft * basePrice).toLocaleString();
    };

    return (
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Instant Estimator</h3>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wider">Home Size (Sq Ft)</label>
                    <input
                        type="range"
                        min="1000"
                        max="5000"
                        step="100"
                        value={sqft}
                        onChange={(e) => setSqft(Number(e.target.value))}
                        className="w-full accent-yellow-500"
                    />
                    <div className="text-right text-white font-mono mt-1">{sqft} sq ft</div>
                </div>

                <div>
                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wider">Material</label>
                    <select
                        value={roofType}
                        onChange={(e) => setRoofType(e.target.value)}
                        className="w-full bg-black border border-neutral-700 text-white p-3 rounded-sm focus:border-yellow-500 outline-none"
                    >
                        <option value="asphalt">Asphalt Shingles</option>
                        <option value="metal">Metal Roofing</option>
                        <option value="tile">Clay Tile</option>
                    </select>
                </div>

                <div className="pt-6 border-t border-neutral-800">
                    <div className="text-neutral-400 text-sm mb-1 uppercase tracking-wider">Estimated Cost Range</div>
                    <div className="text-3xl font-black text-yellow-500">
                        ${calculateEstimate()}
                        <span className="text-sm text-neutral-500 font-normal ml-2">*Est. only</span>
                    </div>
                </div>

                <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors rounded-sm">
                    Get Official Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteEstimator;
