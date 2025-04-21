export interface IStaffMember {
  id: number;
  name: string;
}

export interface ICalendarTableProps {
  currentDate: Date;
  staffMembers: IStaffMember[];
}
