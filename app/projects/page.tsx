import { Metadata } from 'next';
import ProjectsList from '@/components/ProjectsList';

export const metadata: Metadata = {
  title: 'Our Projects - UptownProperties.in',
  description: 'Explore our premium real estate projects in Panipat. From residential complexes to commercial spaces, discover your perfect property investment.',
  keywords: 'real estate projects Panipat, residential projects, commercial projects, property investment',
  openGraph: {
    title: 'Our Projects - UptownProperties.in',
    description: 'Explore our premium real estate projects in Panipat. From residential complexes to commercial spaces, discover your perfect property investment.',
    url: 'https://uptownproperties.in/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium real estate projects in Panipat, designed to offer the perfect blend of luxury, comfort, and investment potential.
          </p>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
}