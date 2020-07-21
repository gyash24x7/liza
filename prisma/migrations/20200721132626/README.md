# Migration `20200721132626`

This migration has been generated by gyash24x7 at 7/21/2020, 1:26:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "salt" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200721115947..20200721132626
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -11,6 +11,7 @@
   id       String @default(cuid()) @id
   name     String
   email    String @unique
   password String
+  salt     String
   avatar   String
 }
```

