
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
type state = {
  count: number
increment: (value:number) => void
decrement: () => void
  
}
export const useCount = create(persist<state>(((set) => ({
  count: 0,
  increment: (value: number) => set((state) => ({ count: state.count + value })),

  decrement: () => set((state) => ({ count: state.count - 1 })),

})), { name: "position-storage" })); // ye name storage ke liye hai jahan par ye data store hoga)

// pory objext ki chizen set ke ander hongi set ke parameter kr ander