export interface Employee {
  id: number;
  name: string;
  role: string;
  dateRange: string;
  approver: string;
  team: string;
  location: string;
  policy: string;
  schedule: string;
  status: string;
  days: string;
  hours: string;
}
export interface IProps {
  employee: Employee;
  isSelected: boolean;
  onSelect: () => void;
}
export interface IPaginationProps {
  rowsPerPage: number;
  count: number;
}

export interface IContentProps {
  employees: Employee[];
  selected: number[];
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectOne: (id: number) => void;
  isSelected: (id: number) => boolean;
}
export interface IMultiSelectProps {
  label: string;
  value: string[];
  options: string[];
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
  ) => void;
}
