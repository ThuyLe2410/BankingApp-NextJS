declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface Account {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
}

declare interface User {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalcode: string;
  dateOfBirth: string;
  ssn: string;
}

declare interface TotalBalanceProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

declare interface SidebarProps {
  user: User;
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface MobileNavProps {
  user: User;
}

declare interface RightSidebarProps {
  user: { firstName: string };
  transactions: string[];
  banks: string[];
}

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance: boolean;
}

declare interface SignUpParams {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  email: string;
  password: string;
}

declare interface SignInProps {
  email: string;
  password: string;
}
