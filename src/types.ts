export type ViewMode = 'case-study' | 'redesign' | 'before' | 'comparison';
export type DeviceViewport = 'desktop' | 'tablet' | 'mobile';

export interface UXIssue {
  id: string;
  title: string;
  category: 'Hierarchy' | 'Navigation' | 'CTA' | 'Mobile' | 'Typography' | 'Content' | 'Trust' | 'Spacing';
  severity: 'Critical' | 'High' | 'Medium';
  heuristic: string;
  description: string;
  impactOnUser: string;
  redesignSolution: string;
  coordinates?: { top: string; left: string }; // Position percentage on before-site
}

export interface DesignDecision {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  problemSolved: string;
  psychologicalTrigger: string;
  uiImplementation: string;
  conversionImpact: string;
  tags: string[];
}

export interface PlumbingService {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  startingPrice: string;
  avgTime: string;
  isEmergency: boolean;
  iconName: string;
  features: string[];
}

export interface UserPersona {
  name: string;
  archetype: string;
  age: string;
  situation: string;
  anxietyTriggers: string[];
  primaryGoal: string;
  keyFrustrationWithOldSite: string;
  avatarUrl: string;
}

export interface QuoteRequest {
  serviceType: string;
  urgency: 'emergency' | 'today' | 'this-week' | 'planning';
  propertyType: 'residential' | 'commercial';
  addressOrZip: string;
  description: string;
  fullName: string;
  phone: string;
  email: string;
  preferredTime: string;
}
