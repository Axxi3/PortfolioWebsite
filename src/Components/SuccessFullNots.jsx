import { CheckCircle, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function SuccessFullNots(props) {  
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
    };
  return (
   
    <>
    {isVisible && (
      <motion.div
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.9 }}
        className="rounded-md border-l-4 w-[50%] border-green-500 bg-green-100 p-4 sticky  top-5 z-50"
      >
        <div className="flex items-center justify-between space-x-4">
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-green-600">
             {props.mess}
            </p>
          </div>
          <div onClick={handleClose} className="cursor-pointer">
            <X className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </motion.div>
    )}
  </>
   
  )
}
