import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'

const initialFoodValue = {
  fish: 0,
}

export const useFoodStore = create<typeof initialFoodValue>()(
  devtools(subscribeWithSelector(persist(() => initialFoodValue, { name: 'food-store' })), {
    name: 'FoodStore',
  })
)

export const addOneFish = () => useFoodStore.setState((state) => ({ fish: state.fish + 1 }))
export const addSomeFish = (amount: number) => useFoodStore.setState((state) => ({ fish: state.fish + amount }))
export const removeOneFish = () => useFoodStore.setState((state) => ({ fish: Math.max(0, state.fish - 1) }))
export const removeAllFish = () => useFoodStore.setState({ fish: 0 })
