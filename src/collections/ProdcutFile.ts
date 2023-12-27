import { CollectionConfig } from "payload/types";

export const ProductFiles: CollectionConfig= {
    slug:"product_files",
    admin:{
        hidden: ({user}) => user.role
    }
}