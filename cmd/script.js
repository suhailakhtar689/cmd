window,addEventListener('DOMContentLoaded', function(){
 const videoList = this.document.getElementById('videoList');
 const addVideoFrom = Document.getElementById('addVideoFrom');\

 addVideoFrom.addEventListener('submit', function(event) {
 event.preventDefault();

 const videoTitle = document.getElementById('videoTitle').value;
 const videoUrl = document.getElementById('videoUrl');

 const videoItem = document.createElement('div');
 videoItem.innerHTML = `<h3>${videoTitle}</h3>
 <iframe width="560" height="315" src="${videoUrl}" frameborder="0" alowfullscreen></iframe>`;

 videoList.appendChild(videoItem);

 document.getElementById('videoTitle').value = '';
 document.getElementById('videoUrl').value = '';

 });
});

const uploadInput = document.getElementById('upload');
const gallery = document.getElementById('gallery');

uploadInput.addEventListener('change', handleUpload);

function handleUpload(event) {
    const files = event.target.files;
    for(let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();


        reader.onload = function(e) {
            const thumbnail = createThumbnail(e.target.result);
            gallery.appendChild(thumbnail);
        };

        reader.readAsDataURL(file);
    }
}


function createThumbnail(imageSrc) {
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail');

    const image = document.createElement('img');
    image.src = imageSrc;
   thumbnailContainer.appendChild(image);

   const deleteButton = document.createElement('button');
   deleteButton.classList.add('delete-button');
   deleteButton.innerText = 'Delete';
   deleteButton.addEventListener('click', function() {
       gallery.removeChild(thumbnailContainer);
   });
   thumbnailContainer.appendChild(deleteButton);

   thumbnailContainer.addEventListener('mouseover', function(){
       deleteButton.style.display = 'block';
   });

   thumbnailContainer.addEventListener('mouseout', function(){
    deleteButton.style.display = 'none';
});

return thumbnailContainer;

}