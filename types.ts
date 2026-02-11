import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  focus: string;
  description: string;
  longDescription: string;
  tech: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
  businessType?: string;
}