// globals.d.ts
declare module "*.scss";
declare module "*.sass";
declare module "*.css";

// Якщо використовуєш CSS Modules (.module.scss)
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
