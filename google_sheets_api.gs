
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  ui.createMenu('Rodrigo PA004')
    .addItem('Get Prediction', 'PredictAll')
    .addToUi();


  
}

host_production = 'health-insurance-prediction-r.herokuapp.com'

// Helper function

function ApiCall(data, endpoint){
  var  url = 'https://' + host_production + endpoint;
  var payload = JSON.stringify(data);
  Logger.log(payload)

  var options = {'method': 'POST', 'contentType':'application/json', 'payload' : payload}

  var response = UrlFetchApp.fetch(url, options);

  // get response
  var rc = response.getResponseCode();
  var responseText = response.getContentText();

  if (rc !== 200){
    Logger.log ('Response (%s) %s' , rc, responseText);

  }
  else{
    prediction = JSON.parse( responseText);
  }
  return prediction
};

// Health Insurance Propensity Score Prediction
function PredictAll(){
  var ss = SpreadsheetApp.getActiveSheet();
  var titleColumns = ss.getRange('A1:L1').getValues()[0];
  var lastRow = ss.getLastRow()

  var data = ss.getRange('A2' + ':' + 'L' + lastRow).getValues();

  // run over all rows

  for (row in data){
    var json = new Object();


    // run over all columns
    for (var j = 0 ; j < titleColumns.length; j++){
      json[titleColumns[j]] = data[row][j];

    };

    // List of Json to send
    var json_send = new Object();

    json_send['id'] = parseInt(json['id']);
    json_send['gender'] = parseInt(json [ 'gender'])
    json_send['age'] = parseInt(json [ 'age'])
    json_send['driving_license'] = parseInt(json [ 'driving_license'])
    json_send['region_code'] = parseInt(json [ 'region_code'])
    json_send['previously_insured'] = parseInt(json [ 'previously_insured'])
    json_send['vehicle_age'] = parseInt(json [ 'vehicle_age'])
    json_send['vehicle_damage'] = parseInt(json [ 'vehicle_damage'])
    json_send['annual_premium'] = parseInt(json [ 'annual_premium'])
    json_send['policy_sales_channel'] = parseInt(json [ 'policy_sales_channel'])
    json_send['vintage'] = parseInt(json [ 'vintage'])
    json_send['response'] = parseInt(json [ 'response'])

    Logger.log(json_send)

    pred = ApiCall(json_send, '/healthinsurance/predict')

    // send back to google sheets
    ss.getRange(Number(row) + 2, 13).setValue(pred[0]['prediction'])

    


  
  
  
  };

  


};