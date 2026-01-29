'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeProps {
    code: string;
    children: React.ReactNode;
    className?: string;
}

interface CodeHeaderProps {
    icon?: React.ComponentType<{ className?: string }>;
    copyButton?: boolean;
    children: React.ReactNode;
}

interface CodeBlockProps {
    lang?: string;
    writing?: boolean;
    cursor?: boolean;
    duration?: number;
    delay?: number;
}

const CodeContext = React.createContext<{ code: string } | null>(null);

const useCodeContext = () => {
    const context = React.useContext(CodeContext);
    if (!context) {
        throw new Error('Code components must be used within a Code provider');
    }
    return context;
};

// Syntax highlighting for TSX
const highlightCode = (code: string): React.ReactNode[] => {
    const lines = code.split('\n');

    return lines.map((line, lineIndex) => {
        const tokens: React.ReactNode[] = [];
        let remaining = line;
        let keyIndex = 0;

        // Simple tokenization
        const patterns = [
            { regex: /^(\s*)(\/\/.*)/, type: 'comment' },
            { regex: /^(\s*)('use client';?)/, type: 'string' },
            { regex: /'([^']*)'/, type: 'string' },
            { regex: /"([^"]*)"/, type: 'string' },
            { regex: /`([^`]*)`/, type: 'string' },
            { regex: /\b(import|export|from|const|let|var|function|return|type|interface|extends|as)\b/, type: 'keyword' },
            { regex: /\b(React|string|number|boolean|void|any|null|undefined)\b/, type: 'type' },
            { regex: /<\/?([A-Z][a-zA-Z]*|[a-z]+)/, type: 'tag' },
            { regex: /\b(true|false)\b/, type: 'boolean' },
            { regex: /\{\.\.\.([a-zA-Z]+)\}/, type: 'spread' },
        ];

        while (remaining.length > 0) {
            let matched = false;

            for (const { regex, type } of patterns) {
                const match = remaining.match(regex);
                if (match && match.index === 0) {
                    let className = '';
                    switch (type) {
                        case 'keyword':
                            className = 'text-red-400';
                            break;
                        case 'string':
                            className = 'text-green-400';
                            break;
                        case 'comment':
                            className = 'text-gray-500';
                            break;
                        case 'type':
                            className = 'text-yellow-400';
                            break;
                        case 'tag':
                            className = 'text-blue-400';
                            break;
                        case 'boolean':
                            className = 'text-orange-400';
                            break;
                        case 'spread':
                            className = 'text-purple-400';
                            break;
                    }

                    tokens.push(
                        <span key={`${lineIndex}-${keyIndex++}`} className={className}>
                            {match[0]}
                        </span>
                    );
                    remaining = remaining.slice(match[0].length);
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                // Check for special characters
                const charMatch = remaining.match(/^[{}()<>:;,=&|+\-*/.[\]]+/);
                if (charMatch) {
                    tokens.push(
                        <span key={`${lineIndex}-${keyIndex++}`} className="text-gray-400">
                            {charMatch[0]}
                        </span>
                    );
                    remaining = remaining.slice(charMatch[0].length);
                } else {
                    // Regular text
                    const textMatch = remaining.match(/^[^\s{}()<>:;,=&|+\-*/.[\]'"]+/);
                    if (textMatch) {
                        tokens.push(
                            <span key={`${lineIndex}-${keyIndex++}`} className="text-foreground">
                                {textMatch[0]}
                            </span>
                        );
                        remaining = remaining.slice(textMatch[0].length);
                    } else if (remaining[0] === ' ') {
                        tokens.push(<span key={`${lineIndex}-${keyIndex++}`}> </span>);
                        remaining = remaining.slice(1);
                    } else {
                        tokens.push(
                            <span key={`${lineIndex}-${keyIndex++}`}>{remaining[0]}</span>
                        );
                        remaining = remaining.slice(1);
                    }
                }
            }
        }

        return (
            <div key={lineIndex} className="leading-6">
                {tokens.length > 0 ? tokens : <span>&nbsp;</span>}
            </div>
        );
    });
};

export const Code: React.FC<CodeProps> = ({ code, children, className }) => {
    return (
        <CodeContext.Provider value={{ code }}>
            <div
                className={`rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-xl ${className || ''}`}
            >
                {children}
            </div>
        </CodeContext.Provider>
    );
};

export const CodeHeader: React.FC<CodeHeaderProps> = ({
    icon: Icon,
    copyButton,
    children,
}) => {
    const { code } = useCodeContext();
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-muted/30">
            <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    {Icon && <Icon className="w-4 h-4 text-[#61DAFB]" />}
                    <span>{children}</span>
                </div>
            </div>

            {copyButton && (
                <motion.button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </motion.button>
            )}
        </div>
    );
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
    writing = true,
    cursor = true,
    duration = 3,
    delay = 0.5,
}) => {
    const { code } = useCodeContext();
    const [displayedCode, setDisplayedCode] = React.useState('');
    const [showCursor, setShowCursor] = React.useState(true);
    const [isComplete, setIsComplete] = React.useState(false);

    React.useEffect(() => {
        if (!writing) {
            setDisplayedCode(code);
            setIsComplete(true);
            return;
        }

        const totalChars = code.length;
        const charDelay = (duration * 1000) / totalChars;
        let currentIndex = 0;

        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex < totalChars) {
                    setDisplayedCode(code.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                }
            }, charDelay);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [code, writing, duration, delay]);

    // Cursor blink effect
    React.useEffect(() => {
        if (!cursor) return;
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, [cursor]);

    const highlightedCode = highlightCode(displayedCode);

    return (
        <div className="p-4 font-mono text-sm overflow-auto">
            <div className="relative">
                {highlightedCode}
                {cursor && !isComplete && (
                    <motion.span
                        className={`inline-block w-2 h-5 bg-primary ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ verticalAlign: 'text-bottom' }}
                    />
                )}
            </div>
        </div>
    );
};
