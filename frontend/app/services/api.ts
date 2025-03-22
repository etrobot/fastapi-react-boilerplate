import { Tool } from '../types'

// 使用相对路径，这样前后端部署在同一服务器时可以正常工作
const API_BASE_URL = '/api'

export async function getTools(): Promise<Tool[]> {
  console.log('正在从服务器获取工具数据...')
  try {
    const response = await fetch(`${API_BASE_URL}/tools`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('成功获取工具数据:', data)
    return data
  } catch (error) {
    console.error('获取工具数据失败:', error)
    throw error
  }
} 