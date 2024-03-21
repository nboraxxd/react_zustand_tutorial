import { useFoodStore } from '@/stores/foodStore'

export default function FoodBox() {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore()

  return (
    <div className="box">
      <h1>Food Box</h1>
      <p>fish: {fish}</p>
      <div>
        <button onClick={addOneFish}>Add fish</button>
        <button
          onClick={removeOneFish}
          disabled={fish <= 0}
          style={{ opacity: fish <= 0 ? 0.6 : 1, cursor: fish <= 0 ? 'default' : 'pointer' }}
        >
          Remove fish
        </button>
        <button onClick={removeAllFish}>Remove all fish</button>
      </div>
    </div>
  )
}
