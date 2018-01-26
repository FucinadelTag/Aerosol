export default ({ app }) => {

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://s3-eu-west-1.amazonaws.com/cdn.fucinadeltag.it/snipcart/it.js');
    document.body.appendChild(addthisScript);

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://s3-eu-west-1.amazonaws.com/cdn.fucinadeltag.it/snipcart/snipcart.js');
    document.body.appendChild(addthisScript);
}
