"use client";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart as RechartsBarChart, CartesianGrid, Rectangle, XAxis } from "recharts";
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

type ClassType = "Regular" | "Ekstensi" | "Pengulangan" | "Transfer" | "Lainnya";

const chartConfig: Record<ClassType, { label: string; color: string }> = {
    Regular: {
        label: "Regular",
        color: "#28a745",
    },
    Ekstensi: {
        label: "Ekstensi",
        color: "#fd7e14",
    },
    Pengulangan: {
        label: "Pengulangan",
        color: "#ffc107",
    },
    Transfer: {
        label: "Transfer",
        color: "#dc3545",
    },
    Lainnya: {
        label: "Lainnya",
        color: "#6c757d",
    },
};

interface ChartData {
    browser: ClassType;
    visitors: number;
}

function BarChart() {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/src/data/class.json");
                const jsonData: ChartData[] = await response.json();

                const formattedData = jsonData
                    .filter((item): item is ChartData => item.browser in chartConfig)
                    .map((item) => ({
                        browser: item.browser,
                        visitors: item.visitors,
                        fill: chartConfig[item.browser].color,
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
                    <CardTitle>Kelas Mahasiswa</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="w-full h-full max-h-[300px] aspect-square mx-auto"
                    >
                        <RechartsBarChart data={data} width={300} height={300}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="browser"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) =>
                                    chartConfig[value as ClassType]?.label
                                }
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar
                                dataKey="visitors"
                                radius={[8, 8, 0, 0]}
                                shape={({ ...props }) => {
                                    const { payload } = props;
                                    const browser = payload.browser as ClassType;
                                    const fill = chartConfig[browser].color;

                                    const isActive = browser === "Regular";
                                    return (
                                        <Rectangle
                                            {...props}
                                            fill={fill}
                                            fillOpacity={isActive ? 0.8 : 1}
                                            stroke={isActive ? fill : undefined}
                                            strokeDasharray={isActive ? 4 : undefined}
                                            strokeDashoffset={isActive ? 4 : undefined}
                                        />
                                    );
                                }}
                            />
                        </RechartsBarChart>
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

export default BarChart;
