'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Calendar, Filter, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectsList = () => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', 'Residential', 'Commercial', 'Plots'];

  const filteredProjects = projects.filter(project => 
    filter === 'All' || project.type === filter
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'status') return a.status.localeCompare(b.status);
    return 0;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === category
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.type}
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                {project.status}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Home className="h-4 w-4 mr-2" />
                  {project.units}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-800">
                    ₹{project.price.toLocaleString('en-IN')} L+
                  </span>
                  <span className="text-sm text-gray-500">{project.area}</span>
                </div>
              </div>
              
              <Link href={`/projects/${project.slug}`}>
                <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;