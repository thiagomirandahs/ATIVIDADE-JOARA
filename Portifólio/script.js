const profileImg = document.getElementById('profile-img');
const sections = document.querySelectorAll('.section');

profileImg.addEventListener('click', function() {
    this.classList.toggle('centered');
});

sections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.classList.add('enlarged');
    });

    section.addEventListener('mouseleave', function() {
        this.classList.remove('enlarged');
    });
});
