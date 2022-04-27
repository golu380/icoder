<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>My Contact</title>

</head>
<body style="background: cornflowerblue;">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
<form class="row g-3 needs-validation" action="index.php" method="POST">
    <div class="col-md-4 position-relative">
      <label for="validationTooltip01" class="form-label">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" value="Mark" required name="firstname">
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 position-relative">
      <label for="validationTooltip02" class="form-label">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" value="Otto" required name="lastname">
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 position-relative">
      <label for="validationTooltipUsername" class="form-label">Email</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required name="Email">
        <div class="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
    <div class="col-md-6 position-relative">
      <label for="validationTooltip03" class="form-label">City</label>
      <input type="text" class="form-control" id="validationTooltip03" required name="City">
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip04" class="form-label">State</label>
      <select class="form-select" id="validationTooltip04" required name="state">
        <option selected disabled value="" name="value">Choose...</option>
        <option>Andhra pradesh</option>
        <option>Arunachal pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Utter pradesh</option>
        <option>Jharkhand</option>
      </select>
      <div class="invalid-tooltip">
        Please select a valid state.
      </div>
    </div>
    <div class="col-md-3 position-relative">
      <label for="validationTooltip05" class="form-label">Zip</label>
      <input type="text" class="form-control" id="validationTooltip05" required name="Zip">
      <div class="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>

</body>
</html>