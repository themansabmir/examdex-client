export interface DashboardStats {
    totalUsers: number;
    activeSessions: number;
    revenue: number;
}

export interface DashboardData {
    stats: DashboardStats;
    lastUpdated: string;
}
