import { Badge } from "@mantine/core";

type Props = {
  status: statusType | any;
};
enum statusType {
  pending = "Pending",
  success = "Success",
  rejected = "Rejected",
}

const Status = ({ status }: Props) => {
  return (
    <Badge
      variant="filled"
      color={
        statusType.rejected === status
          ? "red"
          : statusType.success === status
          ? "green"
          : "yellow"
      }
    >
      {statusType.rejected === status
        ? statusType.rejected
        : statusType.success === status
        ? statusType.success
        : statusType.pending}
    </Badge>
  );
};

export default Status;
