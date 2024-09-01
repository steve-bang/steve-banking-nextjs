
declare interface CreditCardProps {
    account: Account;
    userName: string;
    showBalance?: boolean;
  }
  
  declare interface BankInfoProps {
    account: Account;
    appwriteItemId?: string;
    type: "full" | "card";
  }
  
  declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
  }
  
  declare interface MobileNavProps {
    user: User;
  }
  
  declare interface PageHeaderProps {
    topTitle: string;
    bottomTitle: string;
    topDescription: string;
    bottomDescription: string;
    connectBank?: boolean;
  }
  
  declare interface PaginationProps {
    page: number;
    totalPages: number;
  }
  
  declare interface PlaidLinkProps {
    user: User;
    variant?: "primary" | "ghost";
    dwollaCustomerId?: string;
  }
  
  // declare type User = sdk.Models.Document & {
  //   accountId: string;
  //   email: string;
  //   name: string;
  //   items: string[];
  //   accessToken: string;
  //   image: string;
  // };
  
  declare interface AuthFormProps {
    type: "sign-in" | "sign-up";
  }
  
  declare interface BankDropdownProps {
    accounts: Account[];
    setValue?: UseFormSetValue<any>;
    otherStyles?: string;
  }
  
  declare interface BankTabItemProps {
    account: Account;
    appwriteItemId?: string;
  }
  
  declare interface TotalBalanceBoxProps {
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
  }
  
  declare interface FooterProps {
    user: User;
    type?: 'mobile' | 'desktop'
  }
  
  declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
  }
  
  declare interface SiderbarProps {
    user: User;
  }
  
  declare interface RecentTransactionsProps {
    accounts: Account[];
    transactions: Transaction[];
    appwriteItemId: string;
    page: number;
  }
  
  declare interface TransactionHistoryTableProps {
    transactions: Transaction[];
    page: number;
  }
  
  declare interface CategoryBadgeProps {
    category: string;
  }
  
  declare interface TransactionTableProps {
    transactions: Transaction[];
  }
  
  declare interface CategoryProps {
    category: CategoryCount;
  }
  
  declare interface DoughnutChartProps {
    accounts: Account[];
  }
  
  declare interface PaymentTransferFormProps {
    accounts: Account[];
  }
  
  // Actions
  declare interface getAccountsProps {
    userId: string;
  }
  
  declare interface getAccountProps {
    appwriteItemId: string;
  }
  
  declare interface getInstitutionProps {
    institutionId: string;
  }
  
  declare interface getTransactionsProps {
    accessToken: string;
  }
  
  
  declare interface CreateTransactionProps {
    name: string;
    amount: string;
    senderId: string;
    senderBankId: string;
    receiverId: string;
    receiverBankId: string;
    email: string;
  }
  
  declare interface getTransactionsByBankIdProps {
    bankId: string;
  }
  
  declare interface signInProps {
    email: string;
    password: string;
  }
  
  declare interface getUserInfoProps {
    userId: string;
  }
  
  declare interface exchangePublicTokenProps {
    publicToken: string;
    user: User;
  }
  
  declare interface createBankAccountProps {
    accessToken: string;
    userId: string;
    accountId: string;
    bankId: string;
    fundingSourceUrl: string;
    shareableId: string;
  }
  
  declare interface getBanksProps {
    userId: string;
  }
  
  declare interface getBankProps {
    documentId: string;
  }
  
  declare interface getBankByAccountIdProps {
    accountId: string;
  }