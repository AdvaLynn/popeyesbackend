// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import menuItem from "./menuItem";
import category from "./category";
import combo from "./combo";
import variant from "./variant";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Popeyes Louisiana Kitchen",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    menuItem,
    variant,
    category,
    combo,
  ]),
});
