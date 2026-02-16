import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface AnalysisResult {
  condition: string;
  issues: string[];
  recommendation: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
}

export enum PageView {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  AI_TOOL = 'AI_TOOL'
}