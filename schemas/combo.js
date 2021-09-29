export default {
  name: "combo",
  title: "Combo",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "calories",
      title: "Calories",
      type: "string",
    },
    {
      name: "menuItems",
      title: "menu Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "menuItem" },
        },
      ],
    },
    {
      name: "comboItems",
      title: "Combo Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
