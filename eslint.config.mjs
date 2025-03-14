import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
    tseslint.configs.eslintRecommended,
    { ignores: ["**/dist", "**/node_modules"] },
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            parser: tseslint.parser,
            globals: { ...globals.node },
        },
    },
    { files: [], ...tseslint.configs.disableTypeChecked },
]);
