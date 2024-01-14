document.getElementById('presentbox-wemen-js').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('presentbox-wemen-goods').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('presentbox-men-js').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('presentbox-men-goods').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('presentbox-unisex-js').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('presentbox-unisex-goods').scrollIntoView({ behavior: 'smooth' });
});
// トップへ戻るボタン
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }