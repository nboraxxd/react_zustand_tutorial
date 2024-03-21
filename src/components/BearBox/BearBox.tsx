import { useBearStore } from '@/stores/bearStore'

export default function BearBox() {
  // Long syntax
  // const bears = useBearStore((state) => state.bears)
  // const increasePopulation = useBearStore((state) => state.increasePopulation)
  // const removeAllBears = useBearStore((state) => state.removeAllBears)

  // Shorter syntax
  // const { bears, increasePopulation, removeAllBears } = useBearStore((state) => state)

  // Shortest syntax
  const { bears, increasePopulation, removeAllBears } = useBearStore()

  return (
    <div className="box">
      <h1>Bear Box</h1>
      <p>{bears} 🐻</p>
      <div>
        <button onClick={increasePopulation}>Add bear</button>
        <button onClick={removeAllBears}>Remove all bears</button>
        <button onClick={useBearStore.persist.clearStorage}>Clear storage</button>
      </div>
    </div>
  )
}
