var initESW = function(gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = true; //Or false
  embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.enabledFeatures = ['LiveAgent'];
  embedded_svc.settings.entryFeature = 'LiveAgent';

  embedded_svc.init(
    'https://cs112.salesforce.com',
    'https://uat-tlcmembership.cs112.force.com/',
    gslbBaseURL,
    '00D0T0000008kNm',
    'Chat_Team',
    {
      baseLiveAgentContentURL: 'https://c.la2-c1cs-ukb.salesforceliveagent.com/content',
      deploymentId: '5720T0000008OIo',
      buttonId: '5730T0000008OK1',
      baseLiveAgentURL: 'https://d.la2-c1cs-ukb.salesforceliveagent.com/chat',
      eswLiveAgentDevName: 'Chat_Team',
      isOfflineSupportEnabled: true
    }
  );
};

if (!window.embedded_svc) {
  var s = document.createElement('script');
  s.setAttribute('src', 'https://cs112.salesforce.com/embeddedservice/5.0/esw.min.js');
  s.onload = function() {
    initESW(null);
  };
  document.body.appendChild(s);
} else {
  initESW('https://service.force.com');
}
