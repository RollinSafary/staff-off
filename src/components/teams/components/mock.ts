const createData = (
  name: string,
  manager: string,
  members: number,
  createdLastModified: string,
) => ({
  name,
  manager,
  members,
  createdLastModified,
});

export const rows = [
  createData("Development", "Alice", 20, "11 days ago"),
  createData("Quality", "Bob", 8, "14 days ago"),
  createData("IT", "Charlie", 15, "a month ago"),
  createData("Technical Support", "David", 13, "a month ago"),
  createData("HR", "Eve", 12, "2 months ago"),
];
