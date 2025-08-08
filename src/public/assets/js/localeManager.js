const select = document.getElementById('lang-select');

const dn = new Intl.DisplayNames([navigator.language], { type: 'language' });

Array.from(select.options).forEach(opt => {
    opt.text = dn.of(opt.value);
});

document.getElementById('lang-select').addEventListener('change', function () {
    document.cookie = "lang=" + this.value + "; path=/";
    location.reload();
});