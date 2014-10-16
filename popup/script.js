window.onload = function () {
    var buttons = document.getElementsByTagName('INPUT');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var popupName = this.getAttribute('data-popup');

            document.getElementsByClassName('overlay' + ' ' + popupName)[0].style.visibility = 'visible';

            if (popupName == 'fourth') {
                var popup = document.getElementsByClassName('popup' + ' ' + popupName)[0];
                popup.style.top = (document.documentElement.clientHeight / 2 - popup.offsetHeight / 2) + 'px';
                popup.style.left = (document.documentElement.clientWidth / 2 - popup.offsetWidth / 2) + 'px';
            }
        }
    }

    var overlays = document.getElementsByClassName('overlay');
    for (var i = 0; i < overlays.length; i++) {
        overlays[i].onclick = function () {
            this.style.visibility = 'hidden';
        }
    }
};