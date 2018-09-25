export default ({ app }) => {

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js');
    document.body.appendChild(addthisScript);

    var addthisScript = document.createElement('script');
    addthisScript.setAttribute('src', 'https://cdn.snipcart.com/scripts/2.0/snipcart.js');
    addthisScript.setAttribute('id', 'snipcart');
    addthisScript.setAttribute('data-api-key', 'MDBmMGFjMzItODhhNy00OWYzLThkOTktYzU4MGNjNjg5NmQ1NjM2MTk2NTM1MzM1ODI2MDUy');
    document.body.appendChild(addthisScript);

    // var addthisScript = document.createElement('script');
    // addthisScript.setAttribute('src', 'https://s3-eu-west-1.amazonaws.com/cdn.fucinadeltag.it/snipcart/it.js');
    // document.body.appendChild(addthisScript);
    //
    // var addthisScript = document.createElement('script');
    // addthisScript.setAttribute('src', 'https://s3-eu-west-1.amazonaws.com/cdn.fucinadeltag.it/snipcart/snipcart.js');
    // document.body.appendChild(addthisScript);






}
