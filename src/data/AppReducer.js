export default function AppReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.person];
    case "edit":
      return state.map((person) =>
        person.id === action.person.id ? action.person : person
      );
    case "delete":
      return state.filter((person) => person.id !== action.id);
    case "rate":
      return state.map((person) =>
        person.id === action.id ? { ...person, rating: action.rating } : person
      );
    default:
      return state;
  }
}