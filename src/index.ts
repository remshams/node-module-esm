/**
 * `js` appendix has been added as the typesciript compilation does add it
 * when transpilling to JavaScript
 *
 * See https://stackoverflow.com/questions/44979976/typescript-compiler-is-forgetting-to-add-file-extensions-to-es6-module-imports
 * and https://github.com/microsoft/TypeScript/issues/40878
 */
export * from './echo/echo.js';
