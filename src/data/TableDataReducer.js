const TableDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        tableData: action.payload.tableData,
        sortedData: action.payload.tableData,
      };
    case "SORT":
      const { key, direction } = action.payload;
      return {
        ...state,
        sortConfig: { key, direction },
        sortedData: [...state.tableData].sort((a, b) => {
          if (direction === "natural") {
            return 0;
          }
          if (key === "user") {
            return direction === "ascending"
              ? a.user.name.localeCompare(b.user.name)
              : b.user.name.localeCompare(a.user.name);
          } else if (key === "postTitle") {
            return direction === "ascending"
              ? a.post.title.localeCompare(b.post.title)
              : b.post.title.localeCompare(a.post.title);
          } else if (key === "commentCount") {
            return direction === "ascending"
              ? a.comments.length - b.comments.length
              : b.comments.length - a.comments.length;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};

export default TableDataReducer;