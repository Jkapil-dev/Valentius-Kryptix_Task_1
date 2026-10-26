export interface TaskItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: 'planning' | 'timer' | 'goals' | 'workspace';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  quote: string;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}
