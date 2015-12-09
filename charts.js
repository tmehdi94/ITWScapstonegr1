gapi.analytics.ready(function() {

  /* ALTER THIS LINE */
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
  
  var chart6 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:totalEvents',
	  'dimensions': 'ga:dimension1',
	  'filters': 'ga:eventcategory==ChangeStatus',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'TABLE',
      container: 'chart6',
      options: {
        'title': 'Change Status by department ID'
      }
    }
  });
  
  var chart7 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:totalEvents',
	  'dimensions': 'ga:userType',
	  'filters': 'ga:eventcategory==Logout',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'TABLE',
      container: 'chart7',
      options: {
        'title': 'Logout Events'
      }
    }
  });
  
 
	var chart8 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:totalEvents',
	  'dimensions': 'ga:userType',
	  'filters': 'ga:eventcategory==Login',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'TABLE',
      container: 'chart8',
      options: {
        'title': 'Login Events'
      }
    }
  });
  
    var chart9 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:totalEvents',
	  'dimensions': 'ga:pageTitle',
	  'filters': 'ga:eventcategory==Logout',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'TABLE',
      container: 'chart9',
      options: {
        'title': 'Logout Events'
      }
    }
  });
  
  var chart10 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:totalEvents',
	  'dimensions': 'ga:date',
	  'filters': 'ga:eventcategory==DataUpload',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'chart10',
      options: {
        'title': 'Data Uploads'
      }
    }
  });
  
  var chart11 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:sessions',
	  'dimensions': 'ga:date',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'LINE',
      container: 'chart11',
      options: {
        'title': 'Sessions'
      }
    }
  });
  
  var chart12 = new gapi.analytics.googleCharts.DataChart({
    reportType: 'ga',
    query: {
      'metrics': 'ga:avgDomInteractiveTime',
	  'dimensions': 'ga:dimension1',
      'start-date': '30daysAgo',
      'end-date': 'yesterday',
    },
    chart: {
      type: 'BAR',
      container: 'chart12',
      options: {
        'title': 'Avg Document Interactive Time'
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
	chart6.set(newIds).execute();
	chart7.set(newIds).execute();
	chart8.set(newIds).execute();
	chart9.set(newIds).execute();
	chart10.set(newIds).execute();
	chart11.set(newIds).execute();
	chart12.set(newIds).execute();
  });
});