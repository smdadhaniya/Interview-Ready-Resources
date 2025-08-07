---

# Master PostgreSQL — Beginner to Advanced

## 1. Core Concepts & Definitions

| Term           | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| **Database**   | Organized collection of data stored electronically.                                   |
| **Schema**     | Logical container inside a database holding tables, views, functions, etc.            |
| **Table**      | Data organized in rows and columns.                                                   |
| **Row**        | A single record in a table.                                                           |
| **Column**     | A single attribute/field in a table.                                                  |
| **RDBMS**      | Relational Database Management System — organizes data in tables with relations.      |
| **ORDBMS**     | Object-Relational DBMS — extends RDBMS with object-oriented features.                 |
| **PostgreSQL** | Powerful, open-source object-relational database system supporting advanced features. |
| **pgAdmin**    | Web-based GUI tool to manage PostgreSQL databases.                                    |

---

### 🔹 Table Operations (DDL)

| Operation          | Description                                                  | Example                                                                               |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **CREATE TABLE**   | Creates a new table with columns and constraints.            | `CREATE TABLE employees (id SERIAL PRIMARY KEY, name TEXT NOT NULL, salary NUMERIC);` |
| **ALTER TABLE**    | Modify table structure (add/drop columns, rename).           | `ALTER TABLE employees ADD COLUMN department TEXT;`                                   |
|                    |                                                              | `ALTER TABLE employees RENAME COLUMN salary TO salary_usd;`                           |
|                    |                                                              | `ALTER TABLE employees DROP COLUMN department;`                                       |
| **DROP TABLE**     | Deletes a table and all its data permanently.                | `DROP TABLE employees;`                                                               |
| **TRUNCATE TABLE** | Deletes all rows quickly without logging individual deletes. | `TRUNCATE TABLE employees;`                                                           |

---

### 🔹 Data Manipulation (DML)

| Operation  | Description                            | Example                                                                             |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| **INSERT** | Add new rows into a table.             | `sql INSERT INTO employees (name, salary) VALUES ('Alice', 70000), ('Bob', 65000);` |
| **SELECT** | Retrieve data from one or more tables. | `SELECT id, name, salary FROM employees WHERE salary > 60000 ORDER BY salary DESC;` |
| **UPDATE** | Modify existing data in rows.          | `UPDATE employees SET salary = salary * 1.05 WHERE department = 'IT';`              |
| **DELETE** | Remove rows from a table.              | `DELETE FROM employees WHERE salary < 30000;`                                       |

---

### 🔹 Upsert (INSERT ... ON CONFLICT)

| Operation  | Description                                               | Example                                                                                                                            |
| ---------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **UPSERT** | Insert new row or update existing row if conflict occurs. | `sql INSERT INTO employees (id, name, salary) VALUES (1, 'Alice', 75000) ON CONFLICT (id) DO UPDATE SET salary = EXCLUDED.salary;` |

---

### 🔹 Transactions (Atomic Operations)

| Operation    | Description                                   | Example     |
| ------------ | --------------------------------------------- | ----------- |
| **BEGIN**    | Start a transaction block.                    | `BEGIN;`    |
| **COMMIT**   | Save changes made during transaction.         | `COMMIT;`   |
| **ROLLBACK** | Undo changes if an error or condition occurs. | `ROLLBACK;` |

---

### 🔹 Examples in Context

**Create table and insert data:**

```sql
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT,
  salary NUMERIC CHECK (salary > 0)
);

INSERT INTO employees (name, department, salary) VALUES
('Alice', 'IT', 70000),
('Bob', 'HR', 50000),
('Carol', 'IT', 80000);
```

**Read data with conditions:**

```sql
SELECT name, salary FROM employees WHERE department = 'IT' ORDER BY salary DESC LIMIT 3;
```

**Update salaries for HR employees:**

```sql
UPDATE employees SET salary = salary * 1.1 WHERE department = 'HR';
```

**Delete low salary employees:**

```sql
DELETE FROM employees WHERE salary < 60000;
```

**Upsert example:**

```sql
INSERT INTO employees (id, name, salary) VALUES (2, 'Bob', 55000)
ON CONFLICT (id) DO UPDATE SET salary = EXCLUDED.salary;
```

---

## 2. Clauses

### 🔹 Basic Clauses (Beginner)

| Clause       | Description                       | Example                                         |
| ------------ | --------------------------------- | ----------------------------------------------- |
| **SELECT**   | Specifies columns to retrieve.    | `SELECT name, age FROM employees;`              |
| **FROM**     | Specifies the table(s) to query.  | `SELECT * FROM employees;`                      |
| **WHERE**    | Filters rows by condition.        | `SELECT * FROM employees WHERE age > 30;`       |
| **DISTINCT** | Removes duplicate rows.           | `SELECT DISTINCT department FROM employees;`    |
| **ORDER BY** | Sorts results by column(s).       | `SELECT * FROM employees ORDER BY salary DESC;` |
| **LIMIT**    | Limits number of rows returned.   | `SELECT * FROM employees LIMIT 5;`              |
| **OFFSET**   | Skips rows before returning data. | `SELECT * FROM employees OFFSET 10;`            |

---

### 🔹 Intermediate Clauses (Mid-level)

| Clause         | Description                                                 | Example                                                                                           |
| -------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **GROUP BY**   | Groups rows sharing a value for aggregation.                | `SELECT department, COUNT(*) FROM employees GROUP BY department;`                                 |
| **HAVING**     | Filters grouped rows based on condition.                    | `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;`             |
| **AS**         | Assigns alias to columns or tables.                         | `SELECT name AS employee_name FROM employees;`                                                    |
| **CASE**       | Adds conditional logic inside queries.                      | `SELECT name, CASE WHEN salary > 60000 THEN 'High' ELSE 'Low' END AS level FROM employees;`       |
| **WITH (CTE)** | Defines a Common Table Expression (temporary named result). | `WITH high_earners AS (SELECT * FROM employees WHERE salary > 80000) SELECT * FROM high_earners;` |

---

### 🔹 Advanced & Set Clauses (Advanced)

| Clause                | Description                                              | Example                                                                                            |
| --------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **JOIN (ON, USING)**  | Combine rows from two or more tables based on condition. | `SELECT * FROM employees JOIN departments ON employees.dept_id = departments.id;`                  |
| **UNION / UNION ALL** | Merge results of two queries (all or distinct).          | `SELECT name FROM employees UNION SELECT name FROM managers;`                                      |
| **INTERSECT**         | Rows common in both queries.                             | `SELECT name FROM employees INTERSECT SELECT name FROM managers;`                                  |
| **EXCEPT**            | Rows in first query not in second.                       | `SELECT name FROM employees EXCEPT SELECT name FROM managers;`                                     |
| **IN**                | Check if a value is in a list or subquery.               | `SELECT * FROM employees WHERE department IN ('HR', 'IT');`                                        |
| **BETWEEN**           | Checks if value is within a range.                       | `SELECT * FROM employees WHERE salary BETWEEN 50000 AND 100000;`                                   |
| **LIKE / ILIKE**      | Pattern matching (case-sensitive / insensitive).         | `SELECT * FROM employees WHERE name LIKE 'A%';`                                                    |
| **EXISTS**            | Checks existence of rows from subquery.                  | `SELECT * FROM departments WHERE EXISTS (SELECT 1 FROM employees WHERE dept_id = departments.id);` |

---

## 3. Constraints

| Constraint Type   | Description                                               | Example                                                                                                |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **NOT NULL**      | Column must always have a value (no NULLs).               | `CREATE TABLE employees (id INT NOT NULL, name TEXT NOT NULL);`                                        |
| **UNIQUE**        | Values must be unique across rows.                        | `CREATE TABLE users (email TEXT UNIQUE);`                                                              |
| **PRIMARY KEY**   | Uniquely identifies each row (implies NOT NULL + UNIQUE). | `CREATE TABLE customers (id SERIAL PRIMARY KEY, name TEXT);`                                           |
| **FOREIGN KEY**   | Enforces referential integrity between tables.            | `CREATE TABLE orders (customer_id INT REFERENCES customers(id));`                                      |
| **CHECK**         | Validates column values against a condition.              | `CREATE TABLE products (price NUMERIC CHECK (price > 0));`                                             |
| **DEFAULT**       | Sets default value if none provided.                      | `CREATE TABLE accounts (status TEXT DEFAULT 'active');`                                                |
| **EXCLUDE**       | Custom conflict rules (e.g., range overlaps).             | `CREATE TABLE meetings (room TEXT, during TSRANGE, EXCLUDE USING gist (room WITH =, during WITH &&));` |
| **DEFERRABLE**    | Defers constraint checks to transaction end.              | `FOREIGN KEY (...) REFERENCES ... DEFERRABLE INITIALLY DEFERRED;`                                      |
| **COMPOSITE KEY** | Primary key consists of multiple columns.                 | `CREATE TABLE enrollment (student_id INT, course_id INT, PRIMARY KEY (student_id, course_id));`        |

---

## 4. Joins

| Join Type        | Description                                                             | Example                                                                                                        |
| ---------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **INNER JOIN**   | Returns rows with matching keys in both tables.                         | `SELECT * FROM employees INNER JOIN departments ON employees.dept_id = departments.id;`                        |
| **LEFT JOIN**    | All rows from left table + matched rows from right, else NULL on right. | `SELECT * FROM employees LEFT JOIN departments ON employees.dept_id = departments.id;`                         |
| **RIGHT JOIN**   | All rows from right table + matched rows from left, else NULL on left.  | `SELECT * FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id;`                        |
| **FULL JOIN**    | All rows from both tables, NULL where no match.                         | `SELECT * FROM employees FULL JOIN departments ON employees.dept_id = departments.id;`                         |
| **CROSS JOIN**   | Cartesian product of both tables (all combinations).                    | `SELECT * FROM employees CROSS JOIN departments;`                                                              |
| **SELF JOIN**    | Joins table to itself for hierarchical or comparative queries.          | `SELECT e1.name AS manager, e2.name AS employee FROM employees e1 JOIN employees e2 ON e1.id = e2.manager_id;` |
| **NATURAL JOIN** | Joins on all columns with the same name automatically.                  | `SELECT * FROM employees NATURAL JOIN departments;`                                                            |

---

## 5. Relationships

| Relationship Type       | Description                                                           | Example/Use Case                                                                          |
| ----------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **One-to-One (1:1)**    | Each row in A corresponds to one row in B, and vice versa.            | User and their unique passport record.                                                    |
| **One-to-Many (1\:N)**  | One row in A corresponds to many rows in B.                           | One department has many employees.                                                        |
| **Many-to-One (N:1)**   | Many rows in A relate to one row in B (inverse of 1\:N).              | Many employees belong to one department.                                                  |
| **Many-to-Many (M\:N)** | Multiple rows in A relate to multiple rows in B via a junction table. | Students enrolled in many courses, and courses have many students (via enrollment table). |
| **Self-Referencing**    | Table relates to itself for hierarchies.                              | Employees with managers who are also employees.                                           |

**Implementation Tips:**

- Use **`FOREIGN KEY`** constraints for One-to-Many.
- Use **junction tables** with two foreign keys for Many-to-Many.
- Use **`UNIQUE` + `FOREIGN KEY`** for One-to-One.
- Use self-joins and foreign keys on the same table for self-referencing relationships.

---

## 6. Functions

| Function Type                     | Description                                                         | Example                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Built-in Functions**            | Predefined for common operations (string, math, date/time, etc.)    | `SELECT NOW();` (current timestamp)                                                                      |
| **Aggregate Functions**           | Compute values over groups (count, sum, avg, min, max).             | `SELECT AVG(salary) FROM employees;`                                                                     |
| **User-Defined Functions (UDFs)** | Custom functions in SQL or PL/pgSQL.                                | `sql CREATE FUNCTION add(a INT, b INT) RETURNS INT AS $$ BEGIN RETURN a + b; END; $$ LANGUAGE plpgsql; ` |
| **Window Functions**              | Calculations over a partitioned set of rows related to current row. | `SELECT name, AVG(salary) OVER (PARTITION BY department) FROM employees;`                                |
| **Set-Returning Functions**       | Return sets of rows (table-like results).                           | `SELECT * FROM generate_series(1, 5);`                                                                   |
| **Volatility Categories**         | Mark functions as IMMUTABLE (no side effects), STABLE or VOLATILE.  | IMMUTABLE means same input always same output.                                                           |

---

## 7. Triggers

| Feature              | Description                                                                 | Example                                                                                                                                                |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Trigger**          | Automatic procedure invoked BEFORE/AFTER INSERT, UPDATE, DELETE on a table. | `CREATE TRIGGER log_update BEFORE UPDATE ON employees FOR EACH ROW EXECUTE FUNCTION log_changes();`                                                    |
| **Trigger Function** | Function executed by the trigger (usually PL/pgSQL).                        | `sql CREATE FUNCTION log_changes() RETURNS trigger AS $$ BEGIN INSERT INTO audit_table VALUES (NEW.id, now()); RETURN NEW; END; $$ LANGUAGE plpgsql; ` |
| **Timing**           | When trigger fires: BEFORE, AFTER, INSTEAD OF (for views).                  | BEFORE INSERT, AFTER UPDATE                                                                                                                            |
| **Level**            | Granularity: FOR EACH ROW or FOR EACH STATEMENT (once per query).           | FOR EACH ROW                                                                                                                                           |
| **Use Cases**        | Auditing, validation, enforcing rules, cascading changes.                   | Automatically update timestamp columns, maintain audit logs.                                                                                           |

---

## 8. Exercises for Practice

| Level      | Task Description                                                                                                                                   | Hint / Goal                                                 |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Easy**   | Create a table `employees` with columns: id, name, department, salary. Add NOT NULL and UNIQUE constraints.                                        | Practice table creation and constraints.                    |
| **Medium** | Write a query to find the average salary per department with a HAVING clause filtering departments with > 3 employees.                             | Practice GROUP BY and HAVING.                               |
| **Medium** | Write a query using CASE to categorize employees by salary (Low, Medium, High).                                                                    | Practice conditional expressions in SELECT.                 |
| **Hard**   | Create a trigger that logs all salary updates in a separate audit table.                                                                           | Practice creating trigger functions and attaching triggers. |
| **Hard**   | Design a many-to-many relationship between `students` and `courses` tables using a junction table. Insert sample data and query enrolled students. | Practice relationships and joins.                           |

---

- **Indexes** (Critical for performance)
  Add a section explaining how and when to create indexes, plus examples:

  - Types: B-tree, GIN, GiST, Hash, BRIN
  - Syntax: `CREATE INDEX idx_name ON table(column);`
  - Unique indexes
  - Partial indexes
  - When NOT to use indexes (to avoid overhead)

- **Views** (Virtual tables for abstraction)
  Brief intro to views and materialized views:

  - `CREATE VIEW view_name AS SELECT ...`
  - When to use materialized views vs regular views

- **Common Table Expressions (CTEs)** — You already have a mention under clauses, but maybe a short dedicated section with recursive CTE examples could help advanced learners.

- **JSON/JSONB Support** — PostgreSQL’s powerful support for semi-structured data is a huge feature.
  Include basics like storing JSON, querying JSON fields with `->`, `->>`, `jsonb_each()`, indexing JSONB, etc.

- **Backup & Restore** — Basic commands for `pg_dump`, `pg_restore`, `psql` utilities — critical for DB admins.

---

## 9. Indexes

| Type              | Description                                                  | Example                                                      |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **B-tree**        | Default, balanced tree index for equality and range queries. | `CREATE INDEX idx_salary ON employees(salary);`              |
| **Unique Index**  | Enforces uniqueness on columns.                              | `CREATE UNIQUE INDEX idx_email ON users(email);`             |
| **GIN**           | Good for array and full-text search.                         | `CREATE INDEX idx_tags ON articles USING GIN(tags);`         |
| **Partial Index** | Index only subset of rows.                                   | `CREATE INDEX idx_active ON employees(salary) WHERE active;` |

---

## 10. Views

```sql
CREATE VIEW high_earners AS
SELECT name, salary FROM employees WHERE salary > 70000;
```

- Use views to simplify complex queries and enforce security.

---

## 11. JSON / JSONB Data Type

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  data JSONB
);

INSERT INTO orders (data) VALUES
('{"item": "book", "quantity": 3}');
```

Query JSON data:

```sql
SELECT data->>'item' AS item_name FROM orders WHERE data->>'item' = 'book';
```
