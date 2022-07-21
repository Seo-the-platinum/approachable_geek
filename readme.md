# Setup

1. Clone the repository and cd into it. Repo link: [https://github.com/Seo-the-platinum/approachable_geek.git](https://github.com/Seo-the-platinum/approachable_geek.git)

2. Run **npm install** from within the repo to install all dependencies. If you do not have npm, it is included when you download **Node.js** [download here](https://nodejs.org/en/download/)

3. while the install is in progress, the terminal will ask if you would like to install the expo-cli
globally. If you prefer just a local install, go to the [expo docs](https://docs.expo.dev/get-started/installation/). **Note** the expo docs
say that you have to login after installing expo, however, I did not need to install to run the app.

4. The expo client can run the app on web, ios, and android. Web comes as an option by default and expo will open
the app in the browswer. For mobile views, there are 2 options. Emulators/simulators or the expo go app. Expo go 
is the quickest option, and it will work for both ios and android. Just search the expo go app from the app store or play
store on your mobile device. 

5. **optional** If you would like to use an emulator, expo has documentation to setup both xcode and android studio. [ios simulator](https://docs.expo.dev/workflow/ios-simulator/)
and [android emulator](https://docs.expo.dev/workflow/android-studio-emulator/). Again, I would recommend the expo go app because setting up these emulators can take some
time and extensive troubleshooting. Xcode is fairly easy in my experience, but android took me a while to setup.

# Running App

1. Once you finished with setup, from within the cloned repo, run npm start or expo start.

2. You will see a qr code in your terminal after running npm start, if you decided to use expo go, you will use that code to run the app, if not go to step 3.
If you have an ios device, open your camera and scan the qr code with it, you should see a notification pop prompting you to open expo go.
If on an android device, open the expo go app and there should be a scan qr code option. **Important!**, make sure that your mobile device is on
the same wifi network as the computer you are running the project from or else expo go wont be able to find it. If you're on windows, make sure
that your wifi network is set to private because it could prevent the app from connecting.

3. **optional** If you went with emulators, the terminal will prompt you to press a for **Android**, i for **Ios**, and w for **Web**.

![alt text](./assets/images/Screen%20Shot%202022-07-20%20at%2010.46.35%20PM.png)
