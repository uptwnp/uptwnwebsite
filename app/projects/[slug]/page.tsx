import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectInfo from '@/components/ProjectInfo';
import { projects, Project } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found - UptownProperties.in',
    };
  }

  return {
    title: `${project.title} - UptownProperties.in`,
    description: project.description,
    keywords: `${project.title}, real estate project Panipat, ${project.type}, property investment`,
    openGraph: {
      title: `${project.title} - UptownProperties.in`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectInfo project={project} />;
}