(function(){

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCXSgERUVBdBc_57tYO2-tZAG8mhBPvOOk",
    authDomain: "courso-ae357.firebaseapp.com",
    databaseURL: "https://courso-ae357-default-rtdb.firebaseio.com",
    projectId: "courso-ae357",
    storageBucket: "courso-ae357.appspot.com",
    messagingSenderId: "812054298960",
    appId: "1:812054298960:web:b2bb643599189abe9c6c55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //create a root reference 
  var storage = firebase.storage();
  var storageRef = storage.ref();

  // get UI elements
  const file     = document.getElementById('file');
  const upload   = document.getElementById('upload');
  const download = document.getElementById('download');
  const status   = document.getElementById('status');
  const image    = document.getElementById('image');

  // Upload file
  upload.addEventListener('click', e => {
      // Create a file reference
      var ref = storageRef.child('globe')
      let photo = document.getElementById('file').files[0];

      //upload
      ref.put(photo).then(function(snapshot) {
          console.log('Uploaded a blob or file!');
          status.innerHTML='Uploaded blob or file'
      });
  });

  // Download file (read back the file)
  download.addEventListener('click', e => {
      //file reference
      var ref = storage.ref('globe');

      ref.getDownloadURL().then(function(url){
          // insert url into an <img> tag to "download"
          image.src = url;
          status.innerHTML = ' Download blob or file!'
      }) .catch(function(error){console.log(error)});
  })

});
