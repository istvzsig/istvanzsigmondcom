export default function loadImages(section, images) {
    const gallery = document.createElement('div');
    section.append(gallery);
    return new Promise(resolve => {
        images.forEach(imageName => {

            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = `/img/${imageName}.png`;
            gallery.appendChild(image);
        });
    });
}
