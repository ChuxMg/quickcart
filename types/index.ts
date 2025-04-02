import { z } from "zod";
import {
  insertProductSchema,
  insertCartSchema,
  cartItemsSchema,
  shippingAddressSchema,
} from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemsSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
