export default {
  name: "menuItem",
  title: "Menu Item",
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "variant" },
        },
      ],
    },
    {
      title: "Combos",
      name: "combos",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "combo" },
        },
      ],
    },
  ],
};
