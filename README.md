## PREREQUISITES

### PNPM

Before you can use this project, you need to install PNPM. Follow these steps:

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. Install PNPM by running the following command in your terminal:

```
npm install -g pnpm
```

3. Verify the installation by running:

```
pnpm -v
```

You should see the version of PNPM that you installed.

## CORE FEATURES

### Front-End Application

There is a project called `ui` in the `apps` folder that contains the initial
React front-end application. The application was created using the following
command:

```bash
pnpm create vite@latest
```

### Shared Component Library

There is a project called `components` that provides a location for all shared
components.

## TAILWIND

This monorepo utilizes Tailwind CSS as the style platform for all applications.

### Tailwind Preset

A file called `tailwind.preset.js` is located in the root folder. This file
contains the shared theme used by all the applications in the monorepo. All
style settings that should be shared across all applications should be defined
in this file. When the template repository is cloned it will contain the base
Tailwind configuration:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  plugins: [],
};
```

All application projects should reference this file in their
`tailwind.config.js` file as follows:

```javascript
import preset from "../../tailwind.preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/*.tsx",
  ],
  presets: [preset],
};
```

## MONOREPO STRUCTURE

### PNPM Workspaces

A file called `pnpm-workspace.yaml` is located in the root folder and typically
contains the following:

```yaml
packages:
  # executable/launchable applications
  - "apps/*"
  # all packages in subdirs of packages/ and components/
  - "packages/*"
```

This file defines the locations of "packages" that represent separate projects
within the monorepo. In this case we are creating a separate location for
applications (`apps`) and libraries (`packages`).
