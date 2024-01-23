import { Typography } from "antd";

type Props = {
  listSection: {
    name: string;
    href: string;
  }[];
  handlePageChange: (number: number) => void;
  currentPage: number;
};
const ListSectionBar = ({
  listSection,
  handlePageChange,
  currentPage,
}: Props) => {
  return (
    <>
      {listSection &&
        listSection.length > 0 &&
        listSection.map((item, idx) => (
          <Typography
            className="p-4 hover:text-red-500 cursor-pointer"
            key={item.href}
            onClick={() => handlePageChange(idx)}
            style={{
              cursor: "pointer",
              color: currentPage === idx ? "#EF4444" : "",
              fontSize: currentPage === idx ? "5vh" : "3vh",
              fontWeight: currentPage === idx ? "500" : "normal",
              transition: "all 0.3s ease",
              textAlign: "center",
            }}
          >
            0{idx + 1}
          </Typography>
        ))}
    </>
  );
};

export default ListSectionBar;
