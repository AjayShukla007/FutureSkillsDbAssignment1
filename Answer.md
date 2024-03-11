## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
### Answer:

The relationship between the "Product" and "Product_Category" entities in the ERD is one-to-many. This means that a single product can belong to one category, but a category can have many products associated with it.

Here's a breakdown of the relationship:

- ***One Product***: A product record in the "Product" table can have a foreign key referencing a single category ID in the "Product_Category" table. This indicates that a product can only be assigned to one category at a time.
- ***Many Categories***: A single category record in the "Product_Category" table can have its ID referenced by many product records in the "Product" table. This signifies that a category can encompass numerous products.

The ERD likely represents this relationship using a foreign key constraint in the "Product" table that references the primary key of the "Product_Category" table. This ensures data integrity and prevents inconsistencies.


## 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

### Answer:

There are several ways to ensure each product in the "Product" table has a valid category assigned to it:

**1. Database Constraints:**

* **Foreign Key Constraint:**  The most common approach is to implement a foreign key constraint on the "category_id" field in the "Product" table. This constraint would reference the primary key of the "Product_Category" table.  The database will then enforce data integrity, preventing products from being saved with an invalid category ID (one that doesn't exist in the "Product_Category" table).

**2. Application Logic:**

* **Validation Rules:**  During product creation or update within your application, you can implement validation rules to check if the chosen category ID exists in the "Product_Category" table before saving the product information. This would provide real-time feedback to the user and prevent invalid data from entering the database in the first place.

**3. Default Category:**

* **Default Value:** As a fallback option, you could set a default category ID for products in case no category is explicitly chosen. This could be a generic "Uncategorized" category, but it's important to consider if this aligns with your data needs.

**4. Data Seeding and Management:**

* **Maintain Categories:**  Ensure your "Product_Category" table is properly maintained with relevant categories for your products. Regularly review and update categories as needed.
* **Data Seeding:**  During initial data population or migration, you can implement scripts or tools that ensure category IDs used in the "Product" table already exist in the "Product_Category" table before creating product entries.

## 3. Create schema in any Database script or any ORM (Object Relational Mapping). 

### Answer:
***See <a href="./schema.js">schema.js</a>***