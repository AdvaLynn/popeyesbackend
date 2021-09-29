export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "menuItem" },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(80),
    },
  ],
};
