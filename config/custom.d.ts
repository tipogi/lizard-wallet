// Custom #CONFIG

// Import in tsconfig.json to avoid .svg import errors
declare module "*.svg" {
    const content: any;
    export default content;
}