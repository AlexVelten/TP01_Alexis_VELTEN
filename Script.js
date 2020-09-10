
function FormValidation() {
  var password = $("#password").val();
  var verif_password = $("#verif-password").val();

  //Vérification des mots de passes
  if(password != verif_password){
    alert("Les mots de passe ne correspondent pas");
  }

  //Vérification des radio button
  var homme = $("#homme").prop('checked');
  var femme = $("#femme").prop('checked');
  var autre = $("#autre").prop('checked');

  if(!homme && !femme && !autre){
    alert("Veuillez indiquer votre civilité");
  }

  //Vérification des informations
  var nom = $("#nom").val();
  var prenom = $("#prenom").val();
  var adresse = $("#adresse").val();
  var ville = $("#ville").val();
  var tel = $("#telephone").val();
  var email = $("#email").val();
  var login = $("#login").val();

  if(nom == '' || prenom == '' || adresse == '' || ville == ''
     || tel == '' || email == '' || login == ''){
       alert("Il manque des informations dans le formulaire")
  }
}
