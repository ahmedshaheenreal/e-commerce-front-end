import { create } from "zustand";
import { useAuthStore } from "./auth.store";

interface Route {
  displayName: string;
  path: string;
  isActive: boolean;
}
interface PrivateRoutesState {
  privateRoutes: Route[];
  setPrivateRoutes: (routes: Route[]) => void;
  setActiveRoute: (index: number) => void;
}
const menuItems: Route[] = [
  {
    displayName: "Personal Information",
    path: "/profile",
    isActive: false,
  },
  {
    displayName: "Refer and Earn",
    path: "/refer-and-earn",
    isActive: false,
  },
  {
    displayName: "My Orders",
    path: "/my-orders",
    isActive: false,
  },
  {
    displayName: "My Wishlist",
    path: "/wishlist",
    isActive: false,
  },
  {
    displayName: "My Reviews",
    path: "/my-reviews",
    isActive: false,
  },
  {
    displayName: "My Address Book",
    path: "/my-address-book",
    isActive: false,
  },
  {
    displayName: "My Saved Cards",
    path: "/my-saved-cards",
    isActive: false,
  },
];

// const [itemsState, setItemsState] = useState(menuItems);

export const usePrivateRouteState = create<PrivateRoutesState>()(
  (set, get) => ({
    privateRoutes: menuItems as Route[],
    setPrivateRoutes: (routes) => set({ privateRoutes: routes }),
    setActiveRoute: (index: number) =>
      set((state) => ({
        privateRoutes: state.privateRoutes.map((item, i) =>
          i === index
            ? { ...item, isActive: true }
            : { ...item, isActive: false },
        ),
      })),
  }),
);
