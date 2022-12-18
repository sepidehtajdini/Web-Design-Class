const elements = document.querySelectorAll('.test');
elements.forEach(function (element, index) {
    const ind = index + 1;
    element.setAttribute('class', 'test_' + ind);
})