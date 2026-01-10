import { BASE_API_URL } from "@/CONSTANTS";
import debounce from "lodash/debounce";

export const syncCartDebounced = debounce(async (item: any, id: number) => {
  try {
    console.log(typeof id, item.newQuantity);
    const res = await fetch(`${BASE_API_URL}/cart/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!res.ok) throw await res.json();
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}, 500);
