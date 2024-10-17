"use client";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { LabelList, Pie, Cell, PieChart as RechartsPieChart } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

type StatusType = "Aktif" | "Transfer" | "Cuti" | "Non Aktif" | "Pindah Kuliah";

const chartConfig: Record<StatusType, { label: string; color: string }> = {
    Aktif: {
        label: "Aktif",
        color: "#28a745",
    },
    Transfer: {
        label: "Transfer",
        color: "#ffc107",
    },
    Cuti: {
        label: "Cuti",
        color: "#dc3545",
    },
    "Non Aktif": {
        label: "Non Aktif",
        color: "#fd7e14",
    },
    "Pindah Kuliah": {
        label: "Pindah Kuliah",
        color: "#6c757d",
    },
};

interface ChartData {
    status: StatusType;
    visitors: number;
    fill: string;
}

function PieChart() {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/public/status.json");
                const jsonData: ChartData[] = await response.json();

                const formattedData = jsonData
                    .filter((item): item is ChartData => item.status in chartConfig)
                    .map((item) => ({
                        status: item.status,
                        visitors: item.visitors,
                        fill: chartConfig[item.status].color,
                    }));

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching the chart data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto">
            <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Status Mahasiswa</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="w-full h-full max-h-[300px] aspect-square mx-auto"
                    >
                        <RechartsPieChart width={300} height={300}>
                            <ChartTooltip
                                content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                            />
                            <Pie
                                data={data}
                                dataKey="visitors"
                                isAnimationActive={true}
                                outerRadius={100}
                                labelLine={false}
                            >
                                {data.map((entry) => (
                                    <Cell key={entry.status} fill={entry.fill} />
                                ))}
                                <LabelList
                                    dataKey="status"
                                    className="fill-background"
                                    stroke="none"
                                    fontSize={12}
                                    formatter={(value: keyof typeof chartConfig) =>
                                        chartConfig[value as StatusType]?.label
                                    }
                                />
                            </Pie>
                        </RechartsPieChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default PieChart;
