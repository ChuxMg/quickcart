"use client";

import { Cart } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

const CartIndicator = ({ cart }: { cart?: Cart }) => {
  const indicatorNumber = cart?.items.length;

  return (
    <>
      <AnimatePresence>
        {indicatorNumber! > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="-right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white"
          >
            {indicatorNumber}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartIndicator;
