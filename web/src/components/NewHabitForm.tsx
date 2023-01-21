import { FormEvent, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

const week = [
  'Sunday',
  'Monday',
  'Thursday',
  'Wednesday',
  'Tuesday',
  'Friday',
  'Saturday',
];

export function NewHabitForm() {
  const [title, setTitle] = useState('');
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function createNewHabit(event: FormEvent) {
    event.preventDefault();
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const newWeekDays = weekDays.filter((day) => day !== weekDay);

      setWeekDays(newWeekDays);
    } else {
      const newWeekDays = [...weekDays, weekDay];

      setWeekDays(newWeekDays);
    }
  }

  return (
    <form
      onSubmit={createNewHabit}
      className="w-full flex flex-col mt-6"
    >
      <label
        htmlFor="title"
        className="font-semibold leading-tight"
      >
        What are you going to do?
      </label>

      <input
        type="text"
        id="title"
        placeholder="Exercise, sleep, drink water..."
        className="p-4 rounded mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={(event) => setTitle(event.target.value)}
        autoFocus
      />

      <label
        htmlFor=""
        className="font-semibold leading-tight mt-4"
      >
        Frequency
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {week.map((day, index) => {
          return (
            <Checkbox.Root
              key={index}
              className="flex items-center gap-3 group"
              onCheckedChange={() => {
                handleToggleWeekDay(index);
              }}
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check
                    size={20}
                    className="text-white"
                  />
                </Checkbox.Indicator>
              </div>

              <span className="text-white leading-tight">{day}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check
          size={20}
          weight="bold"
        />
        Confirm
      </button>
    </form>
  );
}
