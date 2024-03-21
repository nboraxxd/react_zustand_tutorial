import { useEffect, useState } from 'react'

import { useBearStore } from '@/stores/bearStore'
import { useFoodStore } from '@/stores/foodStore'

export default function BearBox() {
  // Long syntax
  // const bears = useBearStore((state) => state.bears)
  // const increasePopulation = useBearStore((state) => state.increasePopulation)
  // const removeAllBears = useBearStore((state) => state.removeAllBears)

  // Shorter syntax
  // const { bears, increasePopulation, removeAllBears } = useBearStore((state) => state)

  // Shortest syntax
  const { bears, increasePopulation, removeAllBears } = useBearStore()

  const [backgroundColor, setBackgroundColor] = useState<'lightgreen' | 'lightpink'>(
    useFoodStore.getState().fish > 5 ? 'lightgreen' : 'lightpink'
  )

  useEffect(() => {
    // const unsubcribe = useFoodStore.subscribe((state) =>
    //   state.fish > 5 ? setBackgroundColor('lightgreen') : setBackgroundColor('lightpink')
    // )

    const unsubcribe = useFoodStore.subscribe(
      (state) => state.fish,
      (fish) => (fish > 5 ? setBackgroundColor('lightgreen') : setBackgroundColor('lightpink'))
    )

    return unsubcribe
  }, [])

  return (
    <div className="box" style={{ backgroundColor }}>
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
