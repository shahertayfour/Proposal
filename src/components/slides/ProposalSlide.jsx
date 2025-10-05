import React, { useState } from 'react';
import { Check, Layers, Shield, Wrench, Settings, BookOpen, Info, ChevronDown } from 'lucide-react';

/**
 * Proposal Slide - Slide 4
 * Premium interactive proposal with expandable details
 */
const ProposalSlide = ({ slide }) => {
  const [expandedBullet, setExpandedBullet] = useState(null);
  const [expandedDeliverable, setExpandedDeliverable] = useState(null);

  const includeIcons = [Settings, Shield, Wrench, Layers, BookOpen];

  // Detailed explanations for each bullet point
  const bulletDetails = [
    {
      title: "Security & Isolation Architecture",
      points: [
        "Network segmentation and VLAN isolation for student environments",
        "Role-based access control (RBAC) and authentication systems",
        "Encrypted data at rest and in transit",
        "Audit logging and compliance monitoring",
        "Zero-trust security model implementation"
      ]
    },
    {
      title: "Deployment Excellence",
      points: [
        "Pre-configured development environments (VS Code, PyCharm, IntelliJ)",
        "One-click VM provisioning and student onboarding",
        "Automated software updates and patch management",
        "Instant environment reset and snapshot recovery",
        "Cloud-ready infrastructure with hybrid deployment options"
      ]
    },
    {
      title: "Knowledge Transfer Package",
      points: [
        "Step-by-step VM operation and maintenance guides",
        "Student onboarding and access management procedures",
        "Troubleshooting playbooks and FAQs",
        "Best practices for lab session management",
        "Instructor training and certification materials"
      ]
    }
  ];

  // Detailed specifications for each deliverable
  const deliverableDetails = [
    {
      title: "Architecture Specifications",
      description: "Complete network topology diagrams, VM resource allocation plans, backup strategies, disaster recovery protocols, and scalability roadmaps"
    },
    {
      title: "VM Image Details",
      description: "Security-hardened base images with pre-installed toolchains, development environments for Python, JavaScript, Java, C++, and cybersecurity utilities"
    },
    {
      title: "Toolkit Components",
      description: "Wireshark, Metasploit, Nmap, Burp Suite, Kali Linux tools, network simulators (GNS3, Packet Tracer), and automation frameworks"
    },
    {
      title: "Platform Features",
      description: "Ansible playbooks, Docker containerization, Kubernetes orchestration, CI/CD pipelines, and infrastructure-as-code (IaC) templates"
    },
    {
      title: "Documentation Suite",
      description: "Admin guides, student handbooks, troubleshooting procedures, backup/restore protocols, and quarterly maintenance checklists"
    }
  ];

  return (
    <div className="relative w-full min-h-screen px-16 pt-16 pb-40 flex flex-col bg-gradient-to-br from-slate-50 via-gray-50/40 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 flex-1">
          {/* Main proposal - 2/3 width with enhanced design */}
          <div className="md:col-span-2 bg-white rounded-2xl p-10 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
              {slide.intro}
            </p>

            <div className="space-y-5">
              {slide.bullets.map((bullet, index) => {
                const isExpanded = expandedBullet === index;
                const details = bulletDetails[index];

                return (
                  <div
                    key={index}
                    className={`group relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                      isExpanded
                        ? 'border-green-300 bg-green-50/50 shadow-lg scale-[1.02]'
                        : 'border-green-100 bg-gradient-to-r from-green-50/30 to-transparent hover:border-green-200 hover:shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => setExpandedBullet(isExpanded ? null : index)}
                  >
                    {/* Info indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        isExpanded ? 'bg-green-600' : 'bg-slate-100'
                      }`}>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'text-white rotate-180' : 'text-slate-400'
                        }`} />
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        isExpanded ? 'text-green-700 scale-125' : 'text-green-600'
                      }`} strokeWidth={3} />
                      <span className="text-base text-slate-700 leading-relaxed font-medium pr-8">
                        {bullet}
                      </span>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-5 pt-5 border-t-2 border-green-100 ml-10">
                        <h4 className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wider">
                          {details.title}
                        </h4>
                        <ul className="space-y-2">
                          {details.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                              <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className={`text-xs text-slate-400 mt-3 ml-10 flex items-center gap-2 transition-opacity duration-300 ${
                      isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <Info className="w-3 h-3" />
                      Click to see technical details
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverables - 1/3 width with premium styling */}
          <div className="bg-gradient-to-br from-primary-blue1 to-primary-blue2 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-8 pb-4 border-b-2 border-white/30">
              {slide.includesTitle}
            </h3>

            <div className="space-y-4">
              {slide.includes.map((item, index) => {
                const Icon = includeIcons[index % includeIcons.length];
                const isExpanded = expandedDeliverable === index;
                const details = deliverableDetails[index];

                return (
                  <div
                    key={index}
                    className={`group relative p-4 rounded-lg cursor-pointer transition-all duration-500 animate-fade-in opacity-0 ${
                      isExpanded
                        ? 'bg-white/30 backdrop-blur-md shadow-xl scale-105'
                        : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                    }`}
                    style={{
                      animationDelay: `${(index + 3) * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => setExpandedDeliverable(isExpanded ? null : index)}
                  >
                    {/* Expand indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? 'text-white rotate-180' : 'text-white/60'
                      }`} />
                    </div>

                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isExpanded ? 'bg-white/40 scale-110 -rotate-6' : 'bg-white/20'
                      }`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-white/95 leading-relaxed font-medium pt-2 pr-6">
                        {item}
                      </span>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 pt-4 border-t-2 border-white/20 ml-13">
                        <h4 className="text-xs font-bold text-white/90 mb-2 uppercase tracking-wider">
                          {details.title}
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed">
                          {details.description}
                        </p>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className={`text-xs text-white/50 mt-2 ml-13 flex items-center gap-1.5 transition-opacity duration-300 ${
                      isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <Info className="w-3 h-3" />
                      Click for specs
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSlide;
