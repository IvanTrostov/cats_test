const selected = new Set();
const packages = document.querySelectorAll('.box__item:not(.disabled)');
const toggleSelected = (item) => {
    if (selected.has(item)) {
        selected.delete(item)
    } else {
        selected.add(item)
    }
}

packages.forEach(package => {
    package.addEventListener('click', (e) => {
        const target = e.currentTarget;
        toggleSelected(target);
        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
        }
    })

    package.addEventListener('mouseout', (e) => {
        const target = e.currentTarget;

        if (selected.has(target) && !target.classList.contains('selected')) {
            target.classList.add('selected');
        }
    })
})