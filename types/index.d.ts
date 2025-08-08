declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?:string
}

declare interface Account {
    id:string;
    availableBalance: number;
    currentBalance: number;
    officialName:string;
    mask:string;
    institutionId: string;
    name:string;
    type:string;
    subtype:string;
    appwriteItemId: string;
    shareableId:string
}

declare interface TotalBalanceProps {
    accounts:Account[];
    totalBanks:number;
    totalCurrentBalance: number
}




declare interface DoughnutChartProps {
    accounts: Account[]
}

