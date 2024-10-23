import { ReactNode } from "react";

type CustomListProps<T> = {
  list: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <T extends {}>({ renderItem, list }: CustomListProps<T>) => {
  return <ul className="list">{list.map((value) => renderItem(value))}</ul>;
};

export default List;
