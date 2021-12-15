# Exoplanet-Website

# Description
This is the website that works in tandem with https://github.com/timzhen38/EDM_NEW to predict exoplanets given an input.

# Steps
1. Select a given input number to be calculated.
2. Click on one of the data set. Kaggle or Keplar.
3. Click on one of the processing methods. TSFresh of LightKurve.
4. Select any of the model(s) to what they predicted. RNN, LSTM, GRU, LR, RF
5. Press the Calculate button in order to view results.
6. Wait a couple of seconds until results are updated.
7. After the results appear, you may click on the Pixel or Light Curve buttons to view their respective graphs.

# Important
When setting up a new server, in order for the website to fetch data from it. You will have to manually change the IP in index.js under the httpRequest() function.
Under the variable called url, replace the IP with the IP that your Flask server is running on.

EX: url = 'http://127.0.0.1:8001/...'  -> url = 'http://35.225.133.86:8001/...'
