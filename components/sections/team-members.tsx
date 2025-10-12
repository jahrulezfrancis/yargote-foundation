import { TeamMember } from '@/lib/types';
import splitIntoParagraphs from '@/utils/formartText';
import { Linkedin, Mail, X } from 'lucide-react';
import { useState } from 'react';

interface TeamMemberProps {
    member: TeamMember;
}

const TeamMemberModal = ({ member, isOpen, onClose }: { member: TeamMember; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;


    const aboutContent = splitIntoParagraphs(member.bio, 2);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <div className="sticky top-0 bg-card z-10 flex justify-end p-4 border-b">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal content */}
                <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full md:w-48 h-64 md:h-48 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{member.name}</h3>
                            <p className="text-accent font-medium text-lg mb-4">{member.role}</p>

                            <div className="flex gap-3">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm">Email</span>
                                </a>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span className="text-sm">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">About</h4>
                        {aboutContent.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-slate-700 leading-relaxed text-md"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TeamMemberCard({ member }: TeamMemberProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    if (member.bio.length === 0) {
        member.bio = "Bio not available.";
    }
    // Truncating bio to approximately 80 characters
    const truncatedBio = member.bio.length > 80
        ? member.bio.substring(0, 100) + "..."
        : member.bio;

    return (
        <>
            <div className="bg-card rounded-lg shadow-md text-center overflow-hidden border group hover:shadow-xl transition-all">
                <div className="p-0">
                    <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 style={{ textTransform: "capitalize" }} className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-accent font-medium">{member.role}</p>
                        </div>

                        <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
                            {truncatedBio}
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-accent hover:text-accent/80 font-medium text-sm transition-colors underline decoration-dotted underline-offset-4"
                        >
                            View Full Profile
                        </button>
                    </div>
                </div>
            </div>

            <TeamMemberModal
                member={member}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
}