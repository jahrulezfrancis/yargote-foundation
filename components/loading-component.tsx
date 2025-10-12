import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Color = 'blue' | 'purple' | 'green' | 'red' | 'gray';
type Variant = 'spinner' | 'dots';

interface LoadingProps {
    variant?: Variant;
    size?: Size;
    color?: Color;
    text?: string;
    fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
    variant = 'spinner',
    size = 'md',
    color = 'blue',
    text = '',
    fullScreen = false
}) => {
    const sizeClasses: Record<Size, string> = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const colorClasses: Record<Color, string> = {
        blue: 'border-blue-500',
        purple: 'border-purple-500',
        green: 'border-green-500',
        red: 'border-red-500',
        gray: 'border-gray-500'
    };

    const textSizeClasses: Record<Size, string> = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    };

    const Spinner: React.FC = () => (
        <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`} />
    );

    const Dots: React.FC = () => (
        <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'} bg-${color}-500 rounded-full animate-bounce`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                />
            ))}
        </div>
    );

    const renderLoader = () => {
        return variant === 'dots' ? <Dots /> : <Spinner />;
    };

    const content = (
        <div className="flex flex-col items-center justify-center gap-3">
            {renderLoader()}
            {text && <p className={`${textSizeClasses[size]} text-gray-700 font-medium`}>{text}</p>}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                {content}
            </div>
        );
    }

    return content;
}