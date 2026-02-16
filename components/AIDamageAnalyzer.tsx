import React, { useState } from 'react';
import { Upload, Scan, AlertTriangle, CheckCircle } from 'lucide-react';

const AIDamageAnalyzer: React.FC = () => {
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<null | { score: number, status: string }>(null);

    const handleSimulateAnalysis = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            setResult({ score: 85, status: 'Potential Damage Detected' });
        }, 2000);
    };

    return (
        <div className="bg-black border border-neutral-800 p-8 rounded-sm relative overflow-hidden">
            {analyzing && (
                <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center flex-col">
                    <Scan className="w-12 h-12 text-yellow-500 animate-pulse mb-4" />
                    <div className="text-yellow-500 font-mono text-sm animate-pulse">ANALYZING GEOMETRY...</div>
                </div>
            )}

            <div className="flex items-center gap-3 mb-6 relative z-10">
                <Scan className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">AI Damage Assessment</h3>
            </div>

            {!result ? (
                <div className="border-2 border-dashed border-neutral-800 rounded-sm p-8 text-center hover:border-yellow-500/50 transition-colors cursor-pointer" onClick={handleSimulateAnalysis}>
                    <Upload className="w-8 h-8 text-neutral-500 mx-auto mb-4" />
                    <p className="text-neutral-400 text-sm">Upload clear photo of roof section</p>
                    <button className="mt-4 px-4 py-2 bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                        Select Image
                    </button>
                </div>
            ) : (
                <div className="bg-neutral-900/50 p-6 rounded-sm border border-yellow-500/20">
                    <div className="flex items-center gap-2 mb-4 text-yellow-500">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wide">Analysis Complete</span>
                    </div>
                    <div className="space-y-2 text-sm text-neutral-300">
                        <div className="flex justify-between">
                            <span>Integrity Score:</span>
                            <span className="font-mono text-white">{result.score}%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="font-mono text-yellow-500">{result.status}</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setResult(null)}
                        className="mt-6 w-full py-2 border border-neutral-700 text-neutral-400 text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white transition-colors"
                    >
                        Reset Analysis
                    </button>
                </div>
            )}
        </div>
    );
};

export default AIDamageAnalyzer;
