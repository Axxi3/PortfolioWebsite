import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ErrorNots(props) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (props) => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ x: -900 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          className="rounded-md border-l-4 border-red-500 w-[50%] bg-red-100 p-4 sticky  top-5 z-50"
        >
          <div className="flex items-center justify-between space-x-4">
            <div>
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-red-600">
                {props.mess}
              </p>
            </div>
            <div onClick={handleClose} className="cursor-pointer">
              <X className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
