import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { removeNotification } from "../redux/uiSlice";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

/**
 * Toast Notification Component
 * 
 * FEATURES:
 * - Auto-dismiss after 4 seconds
 * - Multiple toast support
 * - Different types (success, error, warning, info)
 * - Slide-in animation
 * - Click to dismiss
 * - Progress bar indicator
 * 
 * WHY THIS DESIGN?
 * - Non-intrusive feedback
 * - Clear visual indicators
 * - Auto cleanup
 * - Professional appearance
 */

const Toast = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.ui.notifications);

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <FaTimesCircle className="text-red-500" size={20} />;
      case 'warning':
        return <FaExclamationCircle className="text-yellow-500" size={20} />;
      case 'info':
        return <FaInfoCircle className="text-blue-500" size={20} />;
      default:
        return <FaInfoCircle className="text-blue-500" size={20} />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'success':
        return 'border-l-green-500';
      case 'error':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'info':
        return 'border-l-blue-500';
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`bg-white rounded-xl shadow-2xl border-l-4 ${getBorderColor(notification.type)} p-4 flex items-start gap-3 cursor-pointer hover:shadow-3xl transition-shadow`}
            onClick={() => dispatch(removeNotification(notification.id))}
          >
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium text-sm">
                {notification.message}
              </p>
            </div>
            <button className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
              <FaTimesCircle size={16} />
            </button>

            {/* Progress Bar */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 ${
                notification.type === 'success' ? 'bg-green-500' :
                notification.type === 'error' ? 'bg-red-500' :
                notification.type === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              onAnimationComplete={() => dispatch(removeNotification(notification.id))}
              style={{ position: 'absolute', bottom: 0, left: 0, borderRadius: '0 0 0 12px' }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;