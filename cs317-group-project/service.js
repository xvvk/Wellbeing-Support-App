// javascript file for managing service workers
// TODO: might remove this js file
// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
/*
const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// saveSubscription saves the subscription to the backend
const saveSub = async subscription => {
    const SERVER_URL = 'http://localhost:4000/save-subscription'
    const response = await fetch(SERVER_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
    })
    return response.json()
}

self.addEventListener('push', function(event) {
    if (event.data) {
        console.log('Push event!! ', event.data.text());
    } else {
        console.log('Push event but no data');
    }
})

self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
        const applicationServerKey = urlB64ToUint8Array(
            'BLBoXy7uprmOuvsVfVgJd0hG4HMneC1K-E5HO3PBWKvyftxTEcFLwbmMOz1SDBil_8D28HGZORBEMedvKvlUOvU' // own public key
        )
        const options = { applicationServerKey, userVisibleOnly: true } // userVisOnly = necessary!!
        const subscription = await self.registration.pushManager.subscribe(options);
        const response = await saveSub(subscription)
        console.log(response);
    } catch (err) {
        console.log('Error', err);
    }
});
*/
/*
Debugging Tip for Service workers
> If you are using Chrome dev tools: You can go to Application Tab > Service Workers.
Here you can unregister the service worker and refresh the app again.
For debugging purposes, I would suggest you enable update on reload checkbox on the top to avoid manual unregister
every time you change the service worker file. More detailed guide here.
 */

/*
We are asking for notification permission in the main function since this is a demo app. But ideally,
we should not be doing it here as it accounts for bad UX.
More details on where you should be calling it in a production app here.

An alternative approach here would be to add a button asking the user to
subscribe to notifications and then on click of that button we show the notification prompt.
 */

/*
const options = {
  "//": "Visual Options",
  "body": "<String>",
  "icon": "<URL String>",
  "image": "<URL String>",
  "badge": "<URL String>",
  "vibrate": "<Array of Integers>",
  "sound": "<URL String>",
  "dir": "<String of 'auto' | 'ltr' | 'rtl'>",

  "//": "Behavioural Options",
  "tag": "<String>",
  "data": "<Anything>",
  "requireInteraction": "<boolean>",
  "renotify": "<Boolean>",
  "silent": "<Boolean>",

  "//": "Both Visual & Behavioural Options",
  "actions": "<Array of Strings>",

  "//": "Information Option. No visual affect.",
  "timestamp": "<Long>"
}
 */

/*
Main thread: The main JS thread that runs when we are browsing a web page with javascript.
Service Worker thread: This is an independent javascript thread which runs on the background
and can run even when the page has been closed.
 */
