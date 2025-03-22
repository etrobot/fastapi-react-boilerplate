import { useState, useEffect } from 'react'
import { ThemeToggle } from './components/theme-toggle'
import { ToolCard } from './components/tool-card'
import { getTools } from './services/api'
import { Tool } from './types'

function App() {
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const data = await getTools()
        setTools(data)
        setError(null)
      } catch (err) {
        setError('获取工具数据失败，请稍后重试')
        console.error('Error fetching tools:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchTools()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <ThemeToggle />
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI 编程工具导航
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            发现最新的 AI 驱动的编程工具和 IDE，提升您的开发效率
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-500"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">加载中...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App