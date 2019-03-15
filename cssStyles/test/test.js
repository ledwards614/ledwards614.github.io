const appMethods = require('../../js/app-projects');

test('test', () => {
    // Arrange
    const testElement = document.createElement('p');

    // Act
    appMethods.toggleProjectOne(testElement);

    // Assert
    expect(testElement.classList.contains('hide')).toBeTruthy();
})