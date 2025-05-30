export default function loadFromLS <T>(key: string): T | undefined  {
    try {
        const state = localStorage.getItem(key)
        if (!state) return undefined
        return JSON.parse(state) as T
    } catch (err) {
        console.error('Error loading state from localStorage:', err)
        return undefined
    }
}