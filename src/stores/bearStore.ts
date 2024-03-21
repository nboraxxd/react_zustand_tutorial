import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type TBearStoreState = {
  bears: number
  color: string
  size: string
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<TBearStoreState>()(
  persist(
    (set) => ({
      bears: 0,
      color: 'white',
      size: 'big',
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bear-store',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['size'].includes(key))),
    }
  )
)
