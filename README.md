# Instructions

## Video - Course

https://www.youtube.com/watch?v=ZBCUegTZF7M

## Basic dependencies

https://docs.expo.dev/router/installation/#create-an-expo-project

```zsh
npx create-expo-app
```

```zsh
npm install
```

```zsh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Change entry point at package.json file

```
"main": "expo-router/entry"
```

### Add scheme inside app.json

```
"scheme": "your-app-scheme"
```

### Run

```
npx expo start -c
```

### Add NativeWind

https://www.nativewind.dev

```zsh
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```

#### Setup Talwind CSS

```zsh
npx tailwindcss init
```

Modify the file created to:

```
// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./app.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Also add babel plugin:

```
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

## Backend

appwrite
