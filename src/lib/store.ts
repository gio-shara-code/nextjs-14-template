import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
    address: string
}

interface UserProfileStore {
    user: User | null
    setUser: (user: User) => void
    tgAccountExists: () => boolean
    walletExists: () => boolean
}

export const useUserProfileStore = create<UserProfileStore>()(
    persist(
        (set, get) => ({
            user: null,
            tgAccountExists: () => get().user !== null,
            walletExists: () => !!get().user?.address,
            setUser: (user: User) => set({ user: user }),
        }),
        {
            name: 'appname.user_profile_store',
        }
    )
)
