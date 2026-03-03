# MK Bil - Expo Mobile Application

A React Native mobile application built with Expo, featuring a multi-screen authentication and role-based registration flow.

## 🚀 Features

-   **Login Screen**: Secure user authentication.
-   **Role Selection**: Choose between Student or Teacher roles.
-   **Dynamic Registration**: Role-specific registration forms.
-   **Navigation**: Smooth screen transitions using React Navigation.

## 🛠️ Tech Stack

-   **Framework**: React Native with Expo
-   **Navigation**: @react-navigation/native, @react-navigation/stack
-   **Styling**: React Native StyleSheet
-   **Icons**: Expo Vector Icons (FontAwesome6)

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd mkbil
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🏃 Running the App

### Start the development server
```bash
npx expo start
```

### Run with Tunnel (for physical devices)
```bash
npx expo start --tunnel
```

### Run on Android Emulator
```bash
npx expo start --android
```

### Run on iOS Simulator
```bash
npx expo start --ios
```

## 🏗️ Project Structure

-   `App.js`: Main entry point and navigation container.
-   `src/screens/`: Contains all screen components.
    -   `LoginScreen.js`
    -   `RoleSelectionScreen.js`
    -   `RegistrationScreen.js`
-   `assets/`: Images and fonts used in the app.

## 🛠️ Troubleshooting

### Tunnel Error
If you encounter a `TypeError` when starting with `--tunnel`, try clearing the cache:
```bash
npx expo start --tunnel -c
```

### Emulator Storage Issue
If the emulator fails with `INSTALL_FAILED_INSUFFICIENT_STORAGE`, wipe its data:
```bash
emulator -avd <Your_AVD_Name> -wipe-data
```

## 📄 License
This project is private and for internal use.
