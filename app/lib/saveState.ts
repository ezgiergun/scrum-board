export default function saveState(key: string, state: unknown) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage', err);
  }
}
