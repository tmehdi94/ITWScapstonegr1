gapi.analytics.ready(function() {

  var CLIENT_ID = '688903260894-3bb8vvhfsgkjm9nojqb7olrab4m7kkb0.apps.googleusercontent.com';

  gapi.analytics.auth.authorize({
    container: 'auth-button',
    clientid: CLIENT_ID,
  });

  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector'
  });

  var chart1 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:sessions',
      'dimensions': 'ga:dimension1',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'PIE',
      container: 'chart1',
      options: {
        'title': 'Sessions By Department ID'
      }
    }
  });
  
  var chart2 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:totalevents',
      'filters': 'ga:eventcategory==ChangeStatus',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'chart2',
      options: {
        'title': 'Change Status Events'
      }
    }
  });
  
  var chart3 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:totalevents',
      'filters': 'ga:eventcategory==PDFDownload',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'chart3',
      options: {
        'title': 'PDF Download Events'
      }
    }
  });

  var chart4 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'dimensions': 'ga:date',
      'metrics': 'ga:avgSessionDuration',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'chart4',
      options: {
        'title': 'Average Session Duration'
      }
    }
  });
  
  var chart5 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:30dayUsers',
	  'dimensions': 'ga:date',
      'start-date': 'yesterday',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'TABLE',
      container: 'chart5',
      options: {
        'title': 'Users'
      }
    }
  });
  
  gapi.analytics.auth.on('success', function(response) {
    viewSelector.execute();
  });

  viewSelector.on('change', function(ids) {
    var newIds = {
      query: {
        ids: ids
      }
    }
    chart1.set(newIds).execute();
    chart2.set(newIds).execute();
    chart3.set(newIds).execute();
	chart4.set(newIds).execute();
	chart5.set(newIds).execute();
  });
});