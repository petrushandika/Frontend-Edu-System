import { useEffect, useState } from 'react';
import ScheduleCard from './ScheduleCard';
import IScheduleCard from '@/types/IScheduleCard';

function ScheduleList() {
    const [schedule, setSchedule] = useState<IScheduleCard[]>([]);

    useEffect(() => {
        async function fetchSchedule() {
            try {
                const response = await fetch('/src/data/schedule.json');
                const data = await response.json();

                const formattedData: IScheduleCard[] = data.map((item: any) => ({
                    day: item.Hari,
                    instructor: item.Dosen,
                    class: item.Kelas,
                    time: item.Waktu,
                    description: item.Deskripsi,
                    imageUrl: item.Image,
                    course: item['Mata Kuliah'].split(',').map((course: string) => course.trim()),
                }));

                setSchedule(formattedData);
            } catch (error) {
                console.error("Error fetching the schedule data: ", error);
            }
        }

        fetchSchedule();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
            {schedule.map((item, index) => (
                <ScheduleCard
                    key={index}
                    course={item.course}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    class={item.class}
                    instructor={item.instructor}
                    time={item.time}
                    day={item.day}
                />
            ))}
        </div>
    );
};

export default ScheduleList;
