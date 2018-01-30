export default ({ app }) => {

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js');
    document.body.appendChild(addthisScript);

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/locale/it.js');
    document.body.appendChild(addthisScript);
}
