function previewImage(input, boxId) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const box = document.getElementById(boxId);
            
            // Remove existing image if any
            let existingImg = box.querySelector("img");
            if (existingImg) {
                existingImg.remove();
            }

            // Remove span text when image is uploaded
            let existingSpan = box.querySelector("span");
            if (existingSpan) {
                existingSpan.remove();
            }

            // Create and append the new image
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = "X-Ray Preview";
            

            box.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Ensure file inputs exist before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('file1')?.addEventListener('change', function () {
        previewImage(this, 'box1');
    });

    document.getElementById('file2')?.addEventListener('change', function () {
        previewImage(this, 'box2');
    });
});

function showLoadingMessage() {
    document.getElementById("loadingMessage").style.display = "block";
}

