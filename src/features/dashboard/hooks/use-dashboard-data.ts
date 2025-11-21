import { useState, useEffect } from "react";
import { DashboardData } from "../types";

export function useDashboardData() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setData({
                    stats: {
                        totalUsers: 1234,
                        activeSessions: 56,
                        revenue: 98765.43,
                    },
                    lastUpdated: new Date().toISOString(),
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading };
}
