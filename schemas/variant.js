export default {
  name: "variant",
  title: "Variant",
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
      name: "menuItem",
      title: "Menu Item",
      type: "reference",
      to: [{type: "menuItem"}],
    },
  ],
};