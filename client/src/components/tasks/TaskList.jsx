import React from 'react';
import { TASK_STATUS, TASK_PRIORITY, STATUS_COLORS, PRIORITY_COLORS } from '../../utils/constants';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Trash2, Calendar, ClipboardList } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete, index }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-surface-100 rounded-2xl p-5 shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-surface-900 flex-1 leading-tight">{task.title}</h3>
      </div>

      {task.description && (
        <p className="text-surface-500 mb-5 line-clamp-2 text-sm flex-1">{task.description}</p>
      )}

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase ${STATUS_COLORS[task.status]}`}>
            {task.status.replace('-', ' ')}
          </span>
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase ${PRIORITY_COLORS[task.priority]}`}>
            {task.priority}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-surface-100">
          <div className="flex items-center text-xs text-surface-400 font-medium">
            <Calendar size={14} className="mr-1.5" />
            {formatDate(task.createdAt)}
          </div>

          <div className="flex space-x-1.5 opacity-80 hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(task)}
              className="p-1.5 text-surface-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
              title="Edit Task"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => onDelete(task._id)}
              className="p-1.5 text-surface-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete Task"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TaskList = ({ tasks, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-24 px-6 bg-white border border-dashed border-surface-200 rounded-2xl"
      >
        <div className="flex justify-center mb-5 text-surface-300">
          <ClipboardList size={64} strokeWidth={1} />
        </div>
        <h3 className="text-xl font-bold text-surface-900 mb-2">No tasks found</h3>
        <p className="text-surface-500 max-w-sm mx-auto">You're all caught up! Create a new task to keep your projects moving forward.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <TaskCard
            key={task._id}
            index={index}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
