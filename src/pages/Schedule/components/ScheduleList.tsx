import { useEffect, useState } from 'react';
import ScheduleCard from './ScheduleCard';
import IScheduleCard from '@/types/IScheduleCard';

function ScheduleList() {
    const [schedule, setSchedule] = useState<IScheduleCard[]>([]);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('/src/data/schedule.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: IScheduleCard[] = await response.json();
                setSchedule(data);
            } catch (error) {
                console.error("Error fetching the schedule data: ", error);
            }
        };

        fetchSchedule();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
            {schedule.map((item, index) => (
                <ScheduleCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    code={item.code}
                    instructor={item.instructor}
                    time={item.time}
                    day={item.day}
                />
            ))}
        </div>
    );
};

export default ScheduleList;
