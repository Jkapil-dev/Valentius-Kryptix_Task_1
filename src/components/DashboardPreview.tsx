import React, { useState, useEffect } from 'react';
import {
  Check,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Flame,
  Layout,
  Calendar,
  Timer,
  FolderGit2,
  TrendingUp,
} from 'lucide-react';
import type { TaskItem } from '../types';

export const DashboardPreview: React.FC = () => {
  // Initial demo tasks
  const initialTasks: TaskItem[] = [
    {
      id: 't-1',
      title: 'Draft API specification for v2 sync engine',
      category: 'Engineering',
      duration: '45m',
      priority: 'high',
      completed: true,
    },
    {
      id: 't-2',
      title: 'Review typography & color contrast for mobile app',
      category: 'Design',
      duration: '20m',
      priority: 'medium',
      completed: true,
    },
    {
      id: 't-3',
      title: 'Conduct 25m deep focus session on Q3 roadmap',
      category: 'Strategy',
      duration: '25m',
      priority: 'high',
      completed: false,
    },
    {
      id: 't-4',
      title: 'Reply to design feedback on user onboarding flow',
      category: 'Feedback',
      duration: '15m',
      priority: 'low',
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);

  // Focus Timer state
  const [timerSeconds, setTimerSeconds] = useState(1500); // 25 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 1500));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: TaskItem = {
      id: `t-${Date.now()}`,
      title: newTaskTitle.trim(),
      category: 'Focus',
      duration: '25m',
      priority: 'medium',
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsAddingTask(false);
  };

  const resetTasks = () => {
    setTasks(initialTasks);
    setTimerSeconds(1500);
    setIsTimerRunning(false);
  };

  // Calculations
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Weekly visualization dummy data (Mon-Sun)
  const weeklyData = [
    { day: 'Mon', hours: 4.5, active: false },
    { day: 'Tue', hours: 5.2, active: false },
    { day: 'Wed', hours: 6.0, active: true }, // Today
    { day: 'Thu', hours: 4.0, active: false },
    { day: 'Fri', hours: 5.8, active: false },
    { day: 'Sat', hours: 2.0, active: false },
    { day: 'Sun', hours: 1.5, active: false },
  ];

  return (
    <div
      id="dashboard-preview"
      className="w-full bg-white rounded-2xl shadow-xl shadow-[#17212B]/5 border border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#CBD5E1]"
      aria-label="Interactive FocusFlow Dashboard Preview"
    >
      {/* App Window Chrome Header */}
      <div className="bg-[#17212B] px-4 py-3 flex items-center justify-between border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-[#94A3B8] ml-2">
            focusflow.app/workspace/today
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#635BFF]/30 text-[#C8F169] border border-[#635BFF]/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169] animate-pulse" />
            Live Demo
          </span>
          <button
            onClick={resetTasks}
            title="Reset demo data"
            aria-label="Reset demo tasks and timer"
            className="p-1 rounded text-[#94A3B8] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* App Sidebar (Compact & Responsive) */}
        <aside
          aria-label="App Navigation"
          className="w-full md:w-56 bg-[#F8F8F5] border-b md:border-b-0 md:border-r border-[#E2E8F0] p-4 flex md:flex-col justify-between shrink-0"
        >
          <div className="w-full">
            {/* User Profile Mini Badge */}
            <div className="flex items-center gap-2.5 pb-4 mb-3 border-b border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#635BFF] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#C8F169]/80 shadow-sm">
                AR
              </div>
              <div className="leading-tight truncate">
                <p className="text-xs font-semibold text-[#17212B] truncate">
                  Alex Rivera
                </p>
                <p className="text-[10px] text-[#64748B]">Personal Pro</p>
              </div>
            </div>

            {/* Nav Menu */}
            <nav className="space-y-1">
              <button
                type="button"
                className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-[#635BFF] text-white shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Layout className="w-3.5 h-3.5 text-[#C8F169]" />
                  <span>Today</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-mono">
                  {tasks.filter((t) => !t.completed).length}
                </span>
              </button>

              <button
                type="button"
                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#64748B] hover:text-[#17212B] hover:bg-white rounded-lg transition-colors text-left"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Next 7 Days</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#64748B] hover:text-[#17212B] hover:bg-white rounded-lg transition-colors text-left"
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Focus Sprint</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#64748B] hover:text-[#17212B] hover:bg-white rounded-lg transition-colors text-left"
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>
            </nav>
          </div>

          {/* Bottom Streak Pill */}
          <div className="hidden md:block pt-4 border-t border-[#E2E8F0]">
            <div className="bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <div className="flex items-center gap-2 text-[#17212B] font-semibold text-xs">
                <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>14 Day Streak</span>
              </div>
              <p className="text-[11px] text-[#64748B] mt-1">
                You've hit your deep work goal every day this week!
              </p>
            </div>
          </div>
        </aside>

        {/* Dashboard Main Workspace Area */}
        <main className="flex-1 p-4 sm:p-5 flex flex-col justify-between space-y-4 bg-white overflow-hidden">
          {/* Top Greeting & Date Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#F1F5F9]">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#17212B] font-heading flex items-center gap-2">
                Good morning, Alex <span className="text-lg">👋</span>
              </h2>
              <p className="text-xs text-[#64748B]">
                Focus on priorities. Protect your attention today.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#17212B] bg-[#F8F8F5] px-3 py-1.5 rounded-lg border border-[#E2E8F0] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
              <span>Oct 27, 2026 • Sprint 4</span>
            </div>
          </div>

          {/* Widgets Grid: Progress Indicator & Focus Session Timer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Progress Card */}
            <div className="bg-[#F8F8F5] rounded-xl p-3.5 border border-[#E2E8F0] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#17212B] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#635BFF]" />
                  Daily Progress
                </span>
                <span className="text-xs font-bold text-[#635BFF]">
                  {progressPercentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-2.5 mb-1.5">
                <div
                  className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={progressPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#635BFF] to-[#8881FF] transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#64748B]">
                <span>
                  {completedCount} of {totalCount} tasks completed
                </span>
                <span className="text-emerald-700 font-medium">
                  {completedCount === totalCount && totalCount > 0
                    ? 'All done! 🎉'
                    : `${totalCount - completedCount} remaining`}
                </span>
              </div>
            </div>

            {/* Focus Session Timer Card */}
            <div className="bg-[#17212B] text-white rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isTimerRunning ? 'bg-[#C8F169] animate-ping' : 'bg-slate-500'
                    }`}
                  />
                  <span className="text-xs font-semibold text-white">
                    Deep Work Sprint
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C8F169]/20 text-[#C8F169] border border-[#C8F169]/30">
                  {isTimerRunning ? 'ACTIVE' : 'READY'}
                </span>
              </div>

              <div className="my-1 flex items-center justify-between">
                <div className="text-2xl font-bold font-mono tracking-tight text-white">
                  {formatTime(timerSeconds)}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="px-3 py-1 rounded-lg bg-[#635BFF] hover:bg-[#5046E5] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:outline-none"
                    aria-label={isTimerRunning ? 'Pause focus timer' : 'Start focus timer'}
                  >
                    {isTimerRunning ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Start</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setTimerSeconds(1500);
                      setIsTimerRunning(false);
                    }}
                    title="Reset to 25m"
                    aria-label="Reset timer to 25 minutes"
                    className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:outline-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-[10px] text-[#94A3B8]">
                25m sprint • Notifications silenced
              </p>
            </div>
          </div>

          {/* Interactive Daily Task List */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#17212B] uppercase tracking-wider">
                Today's Priority Tasks
              </span>
              <button
                onClick={() => setIsAddingTask(!isAddingTask)}
                className="text-xs font-medium text-[#635BFF] hover:text-[#5046E5] flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded px-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAddingTask ? 'Cancel' : 'Add Task'}</span>
              </button>
            </div>

            {/* Quick Add Task Form */}
            {isAddingTask && (
              <form onSubmit={handleAddTask} className="flex gap-2 animate-in fade-in duration-150">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="Task title (e.g., Write report)..."
                  className="flex-1 text-xs px-3 py-1.5 bg-[#F8F8F5] border border-[#635BFF] rounded-lg text-[#17212B] focus:outline-none focus:ring-1 focus:ring-[#635BFF]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-[#635BFF] text-white text-xs font-semibold rounded-lg hover:bg-[#5046E5] transition-colors"
                >
                  Add
                </button>
              </form>
            )}

            {/* Task list container */}
            <div className="space-y-1.5" role="list">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  role="listitem"
                  onClick={() => toggleTask(task.id)}
                  className={`group flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                    task.completed
                      ? 'bg-[#F8F8F5]/60 border-[#E2E8F0] opacity-75'
                      : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    {/* Checkbox button */}
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={task.completed}
                      aria-label={`Mark "${task.title}" as ${
                        task.completed ? 'incomplete' : 'completed'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask(task.id);
                      }}
                      className={`w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none ${
                        task.completed
                          ? 'bg-[#635BFF] text-white'
                          : 'border-2 border-[#CBD5E1] group-hover:border-[#635BFF]'
                      }`}
                    >
                      {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>

                    {/* Task Title & Details */}
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-medium truncate transition-all ${
                          task.completed
                            ? 'line-through text-[#94A3B8]'
                            : 'text-[#17212B]'
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-[#64748B]">
                          {task.category}
                        </span>
                        <span className="text-[10px] text-[#94A3B8]">•</span>
                        <span className="text-[10px] text-[#64748B]">
                          {task.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Priority Pill */}
                  <div className="shrink-0">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        task.priority === 'high'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : task.priority === 'medium'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {task.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Weekly Productivity Visualization */}
          <div className="pt-2 border-t border-[#F1F5F9]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-[#17212B]">
                Weekly Flow Time
              </span>
              <span className="text-[11px] text-[#64748B]">
                28.9 hrs total this week
              </span>
            </div>
            <div className="flex items-end justify-between gap-1.5 h-14 pt-1">
              {weeklyData.map((d) => (
                <div
                  key={d.day}
                  className="flex-1 flex flex-col items-center gap-1 group relative"
                >
                  <div className="w-full bg-[#E2E8F0] rounded-t-sm h-10 flex items-end">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-300 ${
                        d.active
                          ? 'bg-[#635BFF] relative shadow-sm'
                          : 'bg-[#94A3B8]/60 group-hover:bg-[#635BFF]/60'
                      }`}
                      style={{ height: `${(d.hours / 6.5) * 100}%` }}
                    >
                      {d.active && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-[9px] font-mono ${
                      d.active ? 'text-[#635BFF] font-bold' : 'text-[#94A3B8]'
                    }`}
                  >
                    {d.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
