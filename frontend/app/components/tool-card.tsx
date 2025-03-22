import { ExternalLink } from 'lucide-react'
import { Tool } from '../types'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <img 
          src={tool.icon} 
          alt={`${tool.name} logo`} 
          className="w-12 h-12 rounded-lg object-contain bg-white p-1"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {tool.name}
            </h3>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{tool.description}</p>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tool.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {tool.pricing}
          </div>
        </div>
      </div>
    </div>
  )
}