import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: 'Hello! I am the Ryan Construction AI assistant. How can I help you with your roofing project today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');

        // Simulate reponse
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: 'Thank you for your inquiry. A specialist will be with you shortly.' }]);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/20 flex items-center justify-center hover:scale-105 transition-transform"
            >
                {isOpen ? <X className="w-6 h-6 text-black" /> : <MessageSquare className="w-6 h-6 text-black" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-black border border-neutral-800 rounded-lg shadow-2xl flex flex-col max-h-[500px]">
                    <div className="p-4 border-b border-neutral-800 bg-neutral-900/50 rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-bold text-white text-sm uppercase tracking-wide">Live Support AI</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-md text-sm ${msg.role === 'user' ? 'bg-yellow-500 text-black' : 'bg-neutral-800 text-neutral-200'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-neutral-800 bg-neutral-900/50 rounded-b-lg">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your message..."
                                className="flex-1 bg-black border border-neutral-700 text-white px-3 py-2 rounded-sm text-sm focus:border-yellow-500 outline-none"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-sm transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;
